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
    const email = encodeURIComponent(this.state.email)
    const password = encodeURIComponent(this.state.password)
    const formData = `email=${email}&password=${password}`

    const Options = {
      method: 'POST',
      url: '/auth/login',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    }
    axios(Options)
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
        Router.push('/')
      })
      .catch(({ response }) => {
        this.setState({ err: response.data.errors, send: true })
      })
  }

  writeErr = err => {
    const errMessage = []
    if (err.email) errMessage.push(<ErrMessage message={err.email} />)
    if (err.password) errMessage.push(<ErrMessage message={err.password} />)
    return errMessage
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
        {this.state.send && this.state.err ? this.writeErr(this.state.err) : ''}
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
