import { UPLOAD_VIDEOFILE } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case UPLOAD_VIDEOFILE:
      return [action.payload.data, ...state]
    default:
      return [...state]
  }
}
