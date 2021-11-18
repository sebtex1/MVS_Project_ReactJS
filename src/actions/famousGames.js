import axios from 'axios'

export const GET_FAMOUS_GAMES = 'GET_FAMOUS_GAMES'

export const getFamousGames = payload => ({
  type: GET_FAMOUS_GAMES,
  value: payload
})

export const callFamousGames = payload => dispatch => {
  axios.get(payload).then(response => {
    dispatch(getFamousGames(response))
  })
}
