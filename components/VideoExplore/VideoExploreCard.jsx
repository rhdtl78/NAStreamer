import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Col } from 'reactstrap'
import Link from 'next/link'

class VideoExploreCard extends React.Component {
  static defaultProps = {
    videoName: 'Default Name',
    uploader: 'Deafault Uploader'
  }

  render() {
    const title = this.props.videoName
    const url = `/player?title=${title}`
    return (
      <Col xs="6" sm="6" md="4" lg="3" xl="3">
        <Link href={url}>
          <Card>
            <CardImg top width="100%" src='/image/capture.png'/>
            <CardBody>
              <CardTitle>
                <span>{this.props.videoName}</span>
              </CardTitle>
              <CardText>{this.props.uploader}</CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    )
  }
}

export default VideoExploreCard
