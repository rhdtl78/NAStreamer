import Layout from '../container/layout/Layout'
import { Container, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios'

class SignUp extends React.Component {
  static async getInitialProps() {}

  constructor(props) {
    super(props)
    this.state = {
      eamil: '',
      password: '',
      name: ''
    }
  }

  handleEmail = e => {
    this.setState({ email: e.target.value })
  }

  handlePassword = e => {
    this.setState({ password: e.target.value })
  }

  handleName = e => {
    this.setState({ name: e.target.value })
  }

  onSignIn = () => {
    const name = encodeURIComponent(this.state.name)
    const email = encodeURIComponent(this.state.email)
    const password = encodeURIComponent(this.state.password)
    const formData = `name=${name}&email=${email}&password=${password}`

    const Options = {
      method: 'POST',
      url: '/auth/signup',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    }
    axios(Options)
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div>
        <Container>
          <div className="p-5">
            <FormGroup>
              <Input
                type="email"
                bsSize="lg"
                name="email"
                placeholder="이메일을 입력해주세요."
                onChange={this.handleEmail}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                bsSize="lg"
                name="password"
                placeholder="패스워드를 입력해주세요."
                onChange={this.handlePassword}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                bsSize="lg"
                name="name"
                placeholder="이름을 입력해주세요."
                onChange={this.handleName}
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
      </div>
    )
  }
}

export default SignUp
