/* eslint-disable no-unused-vars */
import axios from 'axios'

export const GET_FAMOUS_GAMES = 'GET_FAMOUS_GAMES'

export const getFamousGames = payload => ({
  type: GET_FAMOUS_GAMES,
  value: payload.data,
  isError: payload.error
})

export const callFamousGames = payload => dispatch => {
  axios
    .get(payload)
    .then(response => {
      dispatch(getFamousGames({ data: response, error: false }))
    })
    .catch(err => {
      dispatch(getFamousGames({ data: null, error: true }))
    })
}
