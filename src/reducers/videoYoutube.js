import { GET_VIDEO_YT } from '../actions/videoYoutube'

const initialState = {
  value: [],
  isError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_YT:
      return {
        ...state,
        value: action.value,
        isError: action.isError
      }
    default:
      return state
  }
}
