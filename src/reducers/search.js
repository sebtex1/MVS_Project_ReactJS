import { CHANGE_SEARCH } from '../actions/search'

const initialState = {
  value: ''
}

// const [windowSize, setWindowSize] = useState({
//   width: !isSSR ? 1200 : window.innerWidth,
//   height: !isSSR ? 800 : window.innerHeight
// })

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
