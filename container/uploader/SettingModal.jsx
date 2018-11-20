import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
  Button
} from 'reactstrap'
import axios from 'axios'
class SettingModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      hashTag: '',
      category: ''
    }
  }

  modifyVideoMetaData = () => {
    const { name, hashTag, category } = this.state
    const { videoUid } = this.props
    axios
      .post(
        `api/modifyVideoMeta?uid=${videoUid}`,
        `name=${name}&hashTag=${hashTag}&category=${category}`
      )
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleCategory = event => {
    this.setState({
      category: event.target.value
    })
  }

  handleHashTag = event => {
    this.setState({
      hashTag: event.target.value
    })
  }

  render() {
    const { isSettingModalUp, handleSettingModal } = this.props
    return (
      <Modal isOpen={isSettingModalUp} toggle={handleSettingModal}>
        <ModalHeader toggle={handleSettingModal}>추가정보 입력</ModalHeader>
        <ModalBody className="p-4">
          <InputGroup>
            <label className="SettingModal__label">이름</label>
            <Input onChange={this.handleName} />
          </InputGroup>
          <InputGroup>
            <label className="SettingModal__label">해쉬태그</label>
            <Input onChange={this.handleHashTag} />
          </InputGroup>
          <InputGroup>
            <label className="SettingModal__label">카테고리</label>
            <Input onChange={this.handleCategory} />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.modifyVideoMetaData}>
            확인
          </Button>
          <Button color="secondary" onClick={handleSettingModal}>
            닫기
          </Button>
        </ModalFooter>
        <style jsx>{`
          .SettingModal__label {
            padding: 7px 0px;
            min-width: 100px;
          }
        `}</style>
      </Modal>
    )
  }
}
export default SettingModal
