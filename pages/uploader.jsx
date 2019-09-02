import Dropzone from 'react-dropzone'
import ReactLoading from 'react-loading'
import { Container, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadVideoFile } from '../actions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from '../container/layout/Layout'
import SettingModal from '../container/uploader/SettingModal'

const CloseButton = ({ closeToast, handleSettingModal, name }) => <Button onClick={(event) => { closeToast(); handleSettingModal();}}>{name}</Button>

class Uploader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
      isSettingModalUp: false,
      videoID: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.success) {
      return { isLoaded: true, videoID: nextProps.videoID }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    const handleSettingModal = this.handleSettingModal
    if (prevState.isLoaded == false && this.state.isLoaded == true)
      toast('Upload Finished', {
        closeButton: <CloseButton handleSettingModal={handleSettingModal} name="Tagging"/>,
        autoClose: 5000
      })
  }

  UploadFiles = acceptedFiles => {
    this.setState({ isLoaded: false })
    acceptedFiles.forEach(file => this.props.uploadVideoFile(file))
  }

  handleSettingModal = () => {
    this.setState({
      isSettingModalUp: !this.state.isSettingModalUp
    })
  }

  render() {
    const { isSettingModalUp, videoID } = this.state
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
          <SettingModal
            videoUid={videoID}
            handleSettingModal={this.handleSettingModal}
            isSettingModalUp={isSettingModalUp}
          />
          <ToastContainer />
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
