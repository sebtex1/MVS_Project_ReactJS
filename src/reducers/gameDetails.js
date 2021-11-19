import { GET_DETAILS_GAME } from '../actions/gameDetails'

const initialState = {
  value: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS_GAME:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
