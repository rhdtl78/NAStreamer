import CardListLow from '../../components/index/CardListLow'
import { Container, Row } from 'reactstrap'
class MainList extends React.Component {
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
      }
    ]
    this.state = { videolist: videolist }
  }
  cardList = () => {
    const { videolist } = this.state
    return videolist.map(item => (
      <CardListLow
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
        <Row xl="3" lg="3" md="4" sm="6" xs="6">
          {this.cardList()}
        </Row>
        <style jsx>{`
          .VideoList {
            display: flex;
          }
        `}</style>
      </div>
    )
  }
}
export default MainList
