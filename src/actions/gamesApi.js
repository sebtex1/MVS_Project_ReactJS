/* eslint-disable no-unused-vars */
import axios from 'axios'

export const GET_GAMES = 'GET_GAMES'

export const getGames = payload => ({
  type: GET_GAMES,
  value: payload.data,
  isError: payload.error
})

export const callApiGames = payload => dispatch => {
  axios
    .get(payload)
    .then(response => {
      dispatch(getGames({ data: response, error: false }))
    })
    .catch(err => {
      dispatch(getGames({ data: null, error: true }))
    })
}
