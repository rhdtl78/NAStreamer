import { UPLOAD_VIDEOFILE } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case UPLOAD_VIDEOFILE:
      //[action.payload.data, ...state] === state.concat([action.payload.data]);
      return [action.payload.data, ...state]
    default:
      return []
  }
}
