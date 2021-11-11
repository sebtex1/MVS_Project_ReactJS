import { CHANGE_DISPLAY } from '../actions/display'

const initialState = {
  value: { width: 1200, height: 800 }
}

// const [windowSize, setWindowSize] = useState({
//   width: !isSSR ? 1200 : window.innerWidth,
//   height: !isSSR ? 800 : window.innerHeight
// })

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
