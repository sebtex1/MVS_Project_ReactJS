import axios from 'axios'

export const GET_DETAILS_GAME = 'GET_DETAILS_GAME'

export const getDetailsGame = payload => ({
  type: GET_DETAILS_GAME,
  value: payload
})

export const callDetailsGame = payload => dispatch => {
  axios.get(`${payload.url}${payload.id}`).then(response => {
    dispatch(getDetailsGame(response.data[`${payload.id}`]))
  })
}
