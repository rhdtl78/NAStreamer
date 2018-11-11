import Dropzone from 'react-dropzone'
import ReactLoading from 'react-loading'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadVideoFile } from '../actions'

import Layout from '../container/layout/Layout'

class Uploader extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoaded: true }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.success) return { isLoaded: true }
    return null
  }

  UploadFiles = acceptedFiles => {
    this.setState({ isLoaded: false })
    acceptedFiles.forEach(file => this.props.uploadVideoFile(file))
  }

  render() {
    return (
      <Layout>
        <Container>
          {this.state.isLoaded ? (
            <Dropzone name="avatar" onDrop={this.UploadFiles} />
          ) : (
            <ReactLoading
              type="balls"
              color="#000"
              height={'20%'}
              width={'20%'}
            />
          )}
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = ({ upload }) => {
  if (upload[0]) return upload[0]
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ uploadVideoFile }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Uploader)
