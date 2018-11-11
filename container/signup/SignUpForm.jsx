import axios from 'axios'
import { FormGroup, Button, Input } from 'reactstrap'
import Router from 'next/router'

const ErrMessage = props => (
  <React.Fragment>
    <span style={{ color: '#ED2939' }}>{props.message}</span>
    <br />
  </React.Fragment>
)

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eamil: '',
      password: '',
      name: '',
      send: false
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
      .then(({ data }) => {
        this.setState({ data: data, send: true })
        Router.push('/login')
      })
      .catch(({ response }) => {
        this.setState({ err: response.data.errors, send: true })
      })
  }

  writeErr = err => {
    const errMessage = []
    if (err.email) errMessage.push(<ErrMessage message={err.email} />)
    if (err.password) errMessage.push(<ErrMessage message={err.password} />)
    if (err.name) errMessage.push(<ErrMessage message={err.name} />)
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
        <FormGroup>
          <Input
            type="text"
            bsSize="lg"
            name="name"
            placeholder="이름을 입력해주세요."
            onChange={this.handleName}
          />
        </FormGroup>
        {this.state.send && this.state.err ? this.writeErr(this.state.err) : ''}
        <Button
          color="primary"
          block
          size="lg"
          className="mb-4 Button"
          onClick={this.onSignIn}
        >
          회원가입
        </Button>
      </section>
    )
  }
}
export default SignUpForm
