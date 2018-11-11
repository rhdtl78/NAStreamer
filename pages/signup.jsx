import Layout from '../container/layout/Layout'
import { Container, Row, Col } from 'reactstrap'
import SignUpForm from '../container/signup/SignUpForm'
class SignUp extends React.Component {
  static async getInitialProps() {}

  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col size="12">
              <SignUpForm />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default SignUp
