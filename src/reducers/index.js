import { combineReducers } from 'redux'

import theme from './theme'
import display from './display'
import search from './search'
import searchFavorite from './searchFavorite'
import gamesApi from './gamesApi'
import famousGames from './famousGames'
import gameDetails from './gameDetails'

export default combineReducers({
  theme,
  display,
  search,
  searchFavorite,
  gamesApi,
  famousGames,
  gameDetails
})
