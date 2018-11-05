import React from 'react'
import { Row, Col } from 'reactstrap'
import VideoExploreCard from '../../components/VideoExplore/VideoExploreCard'

class VideoExploreCardList extends React.Component {
  static defaultProps = {
    videoList : []
  }

  constructor(props) {
    super(props)
  }


  handleList = () => {
    const { videoList } = this.props
    
    return videoList.map(item => (
      <VideoExploreCard videoName={item} uploader="uploader" />
    ))
  }

  render() {
    const list = this.handleList()
    return (
      <Row>
        {list}
      </Row>
    )
  }
}

export default VideoExploreCardList
