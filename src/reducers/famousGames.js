import { GET_FAMOUS_GAMES } from '../actions/famousGames'

const initialState = {
  value: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAMOUS_GAMES:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
