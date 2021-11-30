import { GET_OST_YT } from '../actions/videoYoutubeOst'

const initialState = {
  value: [],
  isError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_OST_YT:
      return {
        ...state,
        value: action.value,
        isError: action.isError
      }
    default:
      return state
  }
}
