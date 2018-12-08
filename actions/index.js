import axios from 'axios'

export const UPLOAD_VIDEOFILE = 'UPLOAD_VIDEOFILE'

export function uploadVideoFile(file) {
  const formData = new FormData()
  formData.append('avatar', file)

  const request = axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  })

  // console.log(request)

  return {
    type: UPLOAD_VIDEOFILE,
    payload: request
  }
}
