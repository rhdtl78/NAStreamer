import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Col } from 'reactstrap'
import Link from 'next/link'

class VideoCard extends React.Component {
  static defaultProps = {
    title: 'Default Name',
    uploader: 'Deafault Uploader'
  }

  render() {
    const { title, uploader, thumbnail, uid } = this.props
    const url = uid ? '/' : `/player/${uid}`
    return (
      <Col xs="6" sm="6" md="4" lg="3" xl="3">
        <Link href={url}>
          <Card>
            <CardImg top width="100%" src={thumbnail} />
            <CardBody>
              <CardTitle>
                <span>{title}</span>
              </CardTitle>
              <CardText>{uploader}</CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    )
  }
}

export default VideoCard
