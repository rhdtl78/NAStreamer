import Layout from '../container/layout/Layout'
import { Container, Col, Row } from 'reactstrap'
import axios from 'axios'
import VideoExploreCardList from '../container/VideoExploreCardList/VideoExploreCardList'

class VideoExplorePage extends React.Component {
  static async getInitialProps() {
    const res = await axios.get('http://renex.iptime.org/api/video/allList')
    return { videoList: res.data.result }
  }

  render() {
    const { videoList } = this.props

    return (
      <Layout>
        <Container>
          <Row className="mt-0 mb-2">
            <Col xs="12" className="bg-light">
              <h5>public video lists</h5>
              <VideoExploreCardList videoList={videoList} />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default VideoExplorePage
