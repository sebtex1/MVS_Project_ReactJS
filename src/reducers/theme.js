import { CHANGE_THEME } from '../actions/theme'

const initialState = {
  value: 'lightTheme'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
