import Layout from '../container/layout/Layout'
import { Container, FormGroup, Input, Button } from 'reactstrap'
import Link from 'next/link'
import axios from 'axios'

class Login extends React.Component {
  static async getInitialProps() {}

  constructor(props) {
    super(props)
    this.state = {
      eamil: '',
      password: ''
    }
  }

  handleEmail = e => {
    this.setState({ email: e.target.value })
  }

  handlePassword = e => {
    this.setState({ password: e.target.value })
  }

  handleLogin = () => {
    console.log('hello')
  }

  render() {
    return (
      <Layout>
        <Container>
          <div className="p-5">
            <FormGroup>
              <Input
                type="email"
                bsSize="lg"
                name="login_email"
                placeholder="이메일을 입력해주세요."
                onChange={this.handleEmail}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                bsSize="lg"
                name="login_password"
                placeholder="패스워드를 입력해주세요."
                onChange={this.handlePassword}
              />
            </FormGroup>
            <Button color="primary" onClick={this.handleLogin} className="mr-3">
              로그인
            </Button>
            <Link href="/signin">
              <div className="btn btn-danger">회원가입</div>
            </Link>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default Login
