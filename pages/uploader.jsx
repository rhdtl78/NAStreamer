import Dropzone from 'react-dropzone'
import ReactLoading from 'react-loading'
import { Container, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadVideoFile } from '../actions'

import Layout from '../container/layout/Layout'
import SettingModal from '../container/uploader/SettingModal'

class Uploader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
      isSettingModalUp: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.success) return { isLoaded: true }
    return null
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
    const { isSettingModalUp } = this.state
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
          <Button onClick={this.handleSettingModal}>모달 일단 뛰우기</Button>
          <SettingModal
            videoUid="5bf2cf887e79fe0fba78809e"
            handleSettingModal={this.handleSettingModal}
            isSettingModalUp={isSettingModalUp}
          />
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
