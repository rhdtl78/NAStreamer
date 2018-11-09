import Layout from '../container/layout/Layout'
import { Container, Col, Row } from 'reactstrap'
import axios from 'axios'
import VideoCardList from '../container/VideoCardList/VideoCardList'

class VideoPage extends React.Component {
  static async getInitialProps() {
    const res = await axios.get('/api/video/allList')
    console.log(res.data)
    if (res.data.success)
      return {
        videoList: res.data.result.map((item, index) => {
          return { title: item, uploader: `uploader${index}`, thumbnail: '/image/capture.png' }
        })
      }
    else return { videoList: [] }
  }

  render() {
    const { videoList } = this.props

    return (
      <Layout>
        <Container>
          <VideoCardList expand={true} videoList={videoList} listTitle="Public Videos"/>
        </Container>
      </Layout>
    )
  }
}

export default VideoPage
