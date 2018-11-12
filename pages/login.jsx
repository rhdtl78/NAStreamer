import Layout from '../container/layout/Layout'
import { Container, Row, Col } from 'reactstrap'
import LogInForm from '../container/login/LogInForm'
class Login extends React.Component {
  static async getInitialProps() {}

  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col size="12">
              <LogInForm />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Login
