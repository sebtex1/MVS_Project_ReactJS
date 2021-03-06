import { CHANGE_DISPLAY } from '../actions/display'

const initialState = {
  value: { width: 1200, height: 800 }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
