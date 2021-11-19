import { GET_GAMES } from '../actions/gamesApi'

const initialState = {
  value: [],
  isError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        value: action.value,
        isError: action.isError
      }
    default:
      return state
  }
}
