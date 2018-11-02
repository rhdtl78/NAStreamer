import Dropzone from 'react-dropzone'
import axios from 'axios'

import Layout from '../container/layout/Layout'

const UploadFile = file => {
  axios.post('/upload', {
    file: file
  })
  console.log(file)
}

const Upload = () => (
  <div>
    <form action="/upload" method="post" encType="multipart/form-data">
      <input type="file" name="avatar" />
      <input type="submit" />
    </form>
  </div>
)

export default Upload
