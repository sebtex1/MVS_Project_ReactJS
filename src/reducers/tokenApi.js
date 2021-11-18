import { GET_TOKEN } from '../actions/tokenApi'

const initialState = {
  token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}
