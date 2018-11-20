import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
  Button
} from 'reactstrap'
class SettingModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isSettingModalUp, handleSettingModal } = this.props
    return (
      <Modal isOpen={isSettingModalUp} toggle={handleSettingModal}>
        <ModalHeader toggle={handleSettingModal}>추가정보 입력</ModalHeader>
        <ModalBody className="p-4">
          <InputGroup>
            <label className="SettingModal__label">이름</label>
            <Input />
          </InputGroup>
          <InputGroup>
            <label className="SettingModal__label">해쉬태그</label>
            <Input />
          </InputGroup>
          <InputGroup>
            <label className="SettingModal__label">카테고리</label>
            <Input />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSettingModal}>
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
