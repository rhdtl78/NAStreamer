import { withRouter } from 'next/router'
import { Container, Col, Row } from 'reactstrap'
import axios from 'axios'

import MyVideoPlayer from '../container/player/MyVideoPlayer'
import Layout from '../container/layout/Layout'
import VideoList from '../container/player/VideoList'
import PlayerDiscription from '../components/player/PlayerDiscription'

class VideoPlayer extends React.Component {
  static async getInitialProps() {
    const baseURL =
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'http://renex.iptime.org'
    return { baseURL }
  }

  constructor(props) {
    super(props)
    this.state = {
      data: {
        title: '신서유기 6 1화',
        uploader: 'Junghun',
        hashtag: [{ title: '꿀잼보장' }, { title: '신서유기' }],
        viewCount: 1
      }
    }
  }

  componentDidMount() {
    const { uid } = this.props.router.query
    this.getVideoMeta(uid)
  }

  getVideoMeta = uid => {
    axios
      .get(`/api/getvideometa/${uid}`)
      .then(({ data }) => this.setState({ data }))
      .catch(() => this.setState({ data: mock }))
  }

  render() {
    const { router } = this.props
    const { data } = this.state
    return (
      <Layout>
        <Container>
          <Row className="mt-0 mt-md-4 mb-0 mb-md-4">
            <Col xs="12" sm="12" md="8" lg="9" xl="9">
              <MyVideoPlayer url={this.props.baseURL} uid={router.query.uid} />
              <PlayerDiscription
                title={data.title}
                uploader={data.uploader.name}
                hashList={data.hashtag}
                viewCount={data.viewCount}
              />
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" xl="3">
              <VideoList />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default withRouter(VideoPlayer)
