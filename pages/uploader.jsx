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
    this.state = { isLoading: false }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isLoading) return { isLoading: nextProps.isLoading }
    return null
  }

  UploadFiles = acceptedFiles => {
    this.setState({ isLoading: true })
    acceptedFiles.forEach(file => this.props.uploadVideoFile(file))
  }

  render() {
    return (
      <Layout>
        <Container>
          {this.state.isLoading === false ? (
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

const mapStateToProps = (state, { success }) => {
  return {
    isLoading: state.success
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ uploadVideoFile }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Uploader)
