import axios from 'axios'
import socketIOClient from 'socket.io-client'
import { Player, BigPlayButton } from 'video-react'
import 'video-react/dist/video-react.css'

class MyVideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: 0,
      isActive: false
    }
  }

  componentDidMount() {
    this.registerUserVideo(this.props.uid)
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this))
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    if (
      Math.floor(state.currentTime) !== Math.floor(prevState.currentTime) ||
      state.paused !== prevState.paused
    ) {
      this.setState({
        paused: state.paused,
        currentTime: state.currentTime
      })
    }
  }

  registerUserVideo = uid => {
    const jwt = localStorage.getItem('token')
    if (jwt) {
      axios
        .get(`/api/getVideoProgress/${uid}`, {
          headers: { Authorization: `bearer ${jwt}` }
        })
        .then(({ data }) => {
          if (data.success) this.activePlayerSocket(data.userVideo._id)
          if (data.userVideo.time !== 0) this.replayVideo(data.userVideo.time)
        })
    }
  }

  activePlayerSocket = uid => {
    this.setState({
      userVideoUid: uid
    })
    /*
    console.log(time)
    const socket = socketIOClient(this.props.baseURL)
    const timeChecker = () => {
      socket.emit('playerTimeCheker', { time, uid })
      time += 1
    }
    this.Interval = setInterval(timeChecker, 30000)
    */
  }

  saveVideoProgress = currentTime => {
    const jwt = localStorage.getItem('token')
    if (jwt) {
      axios
        .post(
          `/api/saveVideoProgress/${this.state.userVideoUid}`,
          {
            currentTime
          },
          {
            headers: { Authorization: `bearer ${jwt}` }
          }
        )
        .then(({ data }) => {})
    }
  }

  replayVideo = timeCount => {
    this.setState({
      currentTime: timeCount
    })
    this.refs.player.seek(this.state.currentTime)
  }

  render() {
    const { uid } = this.props
    const { paused, userVideoUid, currentTime } = this.state
    return (
      <Player ref="player" playsInline src={`/api/?uid=${uid}`}>
        <BigPlayButton position="center" />
        {userVideoUid &&
          paused === false &&
          Math.floor(currentTime) % 30 === 0 &&
          this.saveVideoProgress(currentTime)}
      </Player>
    )
  }
}

export default MyVideoPlayer
