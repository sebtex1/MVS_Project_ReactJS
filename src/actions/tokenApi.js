import axios from 'axios'

export const GET_TOKEN = 'GET_TOKEN'

export const getToken = payload => ({
  type: GET_TOKEN,
  token: payload
})

export const callApiToken = params => dispatch => {
  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: params.username,
      password: params.password
    }
  }).then(response => {
    dispatch(getToken(response))
  })
}
