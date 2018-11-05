import React from 'react'
import { Card } from 'reactstrap'

const VideoExploreCard = props => {
  console.log(props);
  
  return (
    <div>
      <Card xs="6" sm="6" md="4" lg="3" xl="6">
        <span>{props.videoName}</span>
        <br />
        <small>{props.uploader}</small>
      </Card>
    </div>
  )
}

export default VideoExploreCard
