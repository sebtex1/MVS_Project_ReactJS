import { combineReducers } from 'redux'

import theme from './theme'
import display from './display'
import search from './search'
import searchFavorite from './searchFavorite'
import gamesApi from './gamesApi'
import famousGames from './famousGames'
import videoYoutube from './videoYoutube'
import tokenApi from './tokenApi'

export default combineReducers({
  theme,
  display,
  search,
  searchFavorite,
  gamesApi,
  famousGames,
  videoYoutube,
  tokenApi
})
