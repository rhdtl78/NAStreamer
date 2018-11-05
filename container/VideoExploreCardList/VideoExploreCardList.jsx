import React from 'react'
import { Row } from 'reactstrap'
import VideoExploreCard from '../../components/VideoExplore/VideoExploreCard'

class VideoExploreCardList extends React.Component {
  static defaultProps = {
    videoList: []
  }

  constructor(props) {
    super(props)
  }

  handleList = () => {
    const { videoList } = this.props

    return videoList.map((item, index) => (
      <VideoExploreCard videoName={item} uploader="uploader" key={index} />
    ))
  }

  render() {
    return <Row>{this.handleList()}</Row>
  }
}

export default VideoExploreCardList
