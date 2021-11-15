import { GET_GAMES } from '../actions/gamesApi'

const initialState = {
  value: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
