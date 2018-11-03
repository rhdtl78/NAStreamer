import Dropzone from 'react-dropzone'
import axios from 'axios'
import ReactLoading from 'react-loading'
import { Container } from 'reactstrap'

import Layout from '../container/layout/Layout'

class Uploader extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }
  }

  UploadFile = file => {
    const formData = new FormData()
    formData.append('avatar', file)
    console.log(this)
    axios
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function() {
        console.log('SUCCESS!!')
      })
      .catch(function() {
        console.log('FAILURE!!')
      })
  }

  render() {
    return (
      <Layout>
        <Container>
          {this.state.loading === false ? (
            <Dropzone
              name="avatar"
              onDrop={acceptedFiles => {
                acceptedFiles.forEach(this.UploadFile)
              }}
            />
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

export default Uploader
