import axios from 'axios'
import VideoListCard from '../../components/player/VideoListCard'
class VideoList extends React.Component {
  constructor(props) {
    super(props)

    const videolist = [
      {
        videoName: 'Video Name1',
        uploader: 'Uploader',
        imgSrc: '/image/capture.png'
      },
      {
        videoName: 'Video Name2',
        uploader: 'Uploader',
        imgSrc: '/image/capture.png'
      },
      {
        videoName: 'Video Name3',
        uploader: 'Uploader',
        imgSrc: '/image/capture.png'
      },
      {
        videoName: 'Video Name4',
        uploader: 'Uploader',
        imgSrc: '/image/capture.png'
      },
      {
        videoName: 'Video Name5',
        uploader: 'Uploader',
        imgSrc: '/image/capture.png'
      }
    ]
    this.state = { videolist: videolist }
  }

  handleList = () => {
    const { videolist } = this.state
    return videolist.map(item => (
      <VideoListCard
        key={item.videoName}
        videoName={item.videoName}
        uploader={item.uploader}
        imgSrc={item.imgSrc}
      />
    ))
  }

  render() {
    return (
      <div className="VideoList">
        {this.handleList()}
        <style jsx>{`
          .VideoList {
            border: 1px solid rgb(231, 232, 239);
          }
        `}</style>
      </div>
    )
  }
}
export default VideoList
