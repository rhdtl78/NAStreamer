import Layout from '../container/layout/Layout'
import { Container, Col, Row } from 'reactstrap'
import 'video-react/dist/video-react.css'
import MainList from '../container/index/MainList'
const Index = () => (
  <Layout>
   <Container>
      <br />
      <h6>최근 업로드된 영상</h6>
      <Col>
        <Row xs="12" xl="3" lg="3" md="4" xs="6" sm="6">
            <MainList className=""/>
        </Row>
      </Col>

      <br />
      <h6>인기 영상</h6>

      <br />
      <h6>최근 공유된 문서</h6>
    </Container>
  </Layout>
)

export default Index
