import Layout from '../container/layout/Layout'
import { Container, FormGroup, Input, Button } from 'reactstrap'
import Link from 'next/link'
import axios from 'axios'

class SignUp extends React.Component {
  static async getInitialProps() {}

  constructor(props) {
    super(props)
    this.state = {
      eamil: '',
      password: '',
      nickname: ''
    }
  }

  handleEmail = e => {
    this.setState({ email: e.target.value })
  }

  handlePassword = e => {
    this.setState({ password: e.target.value })
  }

  handleNickName = e => {
    this.setState({ nickname: e.target.value })
  }

  onSignIn = () => {
    axios.post('/signup', {
      id: this.state.email,
      pw: this.state.password,
      nick: this.state.nickname
    })
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
            <FormGroup>
              <Input
                type="text"
                bsSize="lg"
                name="login_nickname"
                placeholder="닉네임을 입력해주세요."
                onChange={this.handleNickName}
              />
            </FormGroup>
            <Button
              color="primary"
              block
              size="lg"
              className="mb-4"
              onClick={this.onSignIn}
            >
              회원가입
            </Button>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default SignUp
