import Layout from '../container/layout/Layout'
import { withRouter } from 'next/router'
import { Container, Col, Row } from 'reactstrap'
import axios from 'axios'
import { async } from 'rxjs/internal/scheduler/async'
import { VideoExploreCardList } from '../container/VideoExploreCardList/VideoExploreCardList'

class VideoExplorePage extends React.Component{

  state = {videoList : []}
  async getVideoList () {
    const res = await axios.get('http://localhost:3000/api/video/allList')    
    this.setState({ videoList: res.data.result.map(item => (item)) })
  }

  render () {
    this.getVideoList()
    const { videoList } = this.state
    console.log('state :', this.state);
        
    return (
      <Layout>
        <Container>
          <Row className="mt-0 mb-2">
            <Col xs="12" sm="12" md="12" lg="12" xl="12" className="bg-light">
              <h5>public video lists</h5>
              <VideoExploreCardList videoList={videoList}/>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default VideoExplorePage
