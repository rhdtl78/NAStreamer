import React from 'react'
import { Row, Col } from 'reactstrap'
import VideoCard from '../../components/VideoCard/VideoCard'

class VideoCardList extends React.Component {
  static defaultProps = {
    videoList: [],
    expand: false,
    listTitle: 'listTitle'
  }

  constructor(props) {
    super(props)
  }

  handleList = () => {
    const { videoList, expand } = this.props
    const list = videoList.map(
      ({ videoName, uploader, thumbnail, uid }, index) => (
        <VideoCard
          title={videoName}
          uploader={uploader.name}
          thumbnail={thumbnail}
          uid={uid}
          key={index}
        />
      )
    )

    if (!expand && videoList.length > 4) list.pop()

    return list
  }

  render() {
    const { listTitle } = this.props

    return (
      <Row className="mb-2 mt-2 bg-light p-3">
        <Col xs="12">
          <h5>{listTitle}</h5>
        </Col>
        {this.handleList()}
      </Row>
    )
  }
}

export default VideoCardList
