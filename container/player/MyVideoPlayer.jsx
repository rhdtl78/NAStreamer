import axios from 'axios'
import socketIOClient from 'socket.io-client'
import { Player, BigPlayButton } from 'video-react'
import 'video-react/dist/video-react.css'

class MyVideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: 0
    }
  }

  componentDidMount() {
    this.registerUserVideo(this.props.uid)
  }

  componentWillUnmount() {
    if (this.Interval) clearInterval(this.Interval)
    this.saveVideoProgress()
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    })
  }

  registerUserVideo = uid => {
    const jwt = localStorage.getItem('token')
    if (jwt) {
      axios
        .get(`/api/getVideoProgress/${uid}`, {
          headers: { Authorization: `bearer ${jwt}` }
        })
        .then(({ data }) => {
          if (data.success && data.userVideo.time)
            this.activePlayerSocket(data.userVideo._id, data.userVideo.time)
          if (data.userVideo.time !== 0) this.replayVideo(data.userVideo.time)
        })
    }
  }

  activePlayerSocket = (uid, time) => {
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

  saveVideoProgress = () => {
    const { player } = this.refs.player.getState()
    const jwt = localStorage.getItem('token')
    if (jwt) {
      axios
        .post(
          `/api/saveVideoProgress/${this.state.userVideoUid}`,
          {
            currentTime: player.currentTime
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
    return (
      <Player ref="player" playsInline src={`/api/?uid=${uid}`}>
        <BigPlayButton position="center" />
      </Player>
    )
  }
}

export default MyVideoPlayer
