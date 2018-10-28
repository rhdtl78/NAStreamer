import Layout from '../container/layout/Layout'
import { Container } from 'reactstrap'
import 'video-react/dist/video-react.css'
import { Player } from 'video-react'
const Video = () => (
  <Layout>
    <Container>
      <Player width="100" height="1" playsInline src="/api" />
    </Container>
  </Layout>
)

export default Video
