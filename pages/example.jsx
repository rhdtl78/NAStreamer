import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    axios
      .get('/api/example', {
        headers: { Authorization: `bearer ${localStorage.getItem('token')}` }
      })
      .then(({ data }) => {
        this.setState({ message: data })
      })
  }

  render() {
    return <h3>{this.state.message}</h3>
  }
}
export default Example
