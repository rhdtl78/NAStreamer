import Layout from '../container/layout/Layout'
import { Container, Col, Row } from 'reactstrap'
import 'video-react/dist/video-react.css'
import VideoCardList from '../container/VideoCardList/VideoCardList'
import MainList from '../container/index/MainList'

const Index = () => {
  const videoList = [
    {
      videoName: 'Video Name1',
      uploader: 'Uploader1',
      thumbnail: '/image/capture.png'
    },
    {
      videoName: 'Video Name2',
      uploader: 'Uploader2',
      thumbnail: '/image/capture.png'
    },
    {
      videoName: 'Video Name3',
      uploader: 'Uploader3',
      thumbnail: '/image/capture.png'
    },
    {
      videoName: 'Video Name4',
      uploader: 'Uploader4',
      thumbnail: '/image/capture.png'
    },
    {
      videoName: 'Video Name5',
      uploader: 'Uploader5',
      thumbnail: '/image/capture.png'
    }
  ]
  return (
    <Layout>
      <Container>
        <h5>최근 업로드 영상</h5>
        <br/>
        <MainList />
        <VideoCardList
          expand={false}
          listTitle="최근 업로드 영상"
          videoList={videoList}
        />
        <VideoCardList
          expand={false}
          listTitle="인기 영상"
          videoList={videoList}
        />
        <VideoCardList
          expand={false}
          listTitle="최근 공유 파일"
          videoList={videoList}
        />
      </Container>
    </Layout>
  )
}

export default Index
