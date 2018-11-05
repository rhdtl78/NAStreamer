import React from 'react'
import { VideoExploreCard } from '../../components/VideoExplore/VideoExploreCard'

class VideoExploreCardList extends React.Component {
  constructor(props) {
    super(props)
  }
1
  handleList = () => {
    const { videoList } = this.props

    return videoList.map(item => {

      console.log(item);
      
      return <VideoExploreCard videoName={item} uploader="uploader" />
    })
  }

  render() {
    return <div>{this.handleList()}</div>
  }
}

export default VideoExploreCardList
