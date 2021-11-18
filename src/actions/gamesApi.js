import axios from 'axios'

export const GET_GAMES = 'GET_GAMES'

export const getGames = payload => ({
  type: GET_GAMES,
  value: payload
})

export const callApiGames = payload => dispatch => {
  axios.get(payload).then(response => {
    dispatch(getGames(response))
  })
}
