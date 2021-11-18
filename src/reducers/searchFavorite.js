import { CHANGE_SEARCH_FAVORITE } from '../actions/searchFavorite'

const initialState = {
  value: ''
}

// const [windowSize, setWindowSize] = useState({
//   width: !isSSR ? 1200 : window.innerWidth,
//   height: !isSSR ? 800 : window.innerHeight
// })

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FAVORITE:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
