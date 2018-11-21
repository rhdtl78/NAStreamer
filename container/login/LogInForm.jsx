import axios from 'axios'
import { FormGroup, Button, Input } from 'reactstrap'
import Router from 'next/router'

const ErrMessage = props => (
  <React.Fragment>
    <span style={{ color: '#ED2939' }}>{props.message}</span>
    <br />
  </React.Fragment>
)

class LogInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eamil: '',
      password: '',
      send: false
    }
  }

  handleEmail = e => {
    this.setState({ email: e.target.value })
  }

  handlePassword = e => {
    this.setState({ password: e.target.value })
  }

  onLogIn = () => {
    const { email, password } = this.state
    axios
      .post('/auth/login', { email, password })
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
        Router.push('/')
      })
      .catch(({ response }) => {
        console.log(response.data)
        this.setState({ err: response.data.message, send: true })
      })
  }

  writeErr = err => {
    return <ErrMessage message={err} />
  }

  render() {
    return (
      <section className="p-4">
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
        <div className="text-center p-3">
          {this.state.send && this.state.err
            ? this.writeErr(this.state.err)
            : ''}
        </div>
        <Button
          color="primary"
          block
          size="lg"
          className="mb-4 Button"
          onClick={this.onLogIn}
        >
          로그인
        </Button>
      </section>
    )
  }
}
export default LogInForm
