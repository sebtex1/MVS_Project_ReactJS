// https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=Zelda+BOTW+OST&key=AlzaSyc9sfmtzu7w2RVqO80yjZrKGcBNflVRyds
/* eslint-disable no-unused-vars */
import axios from 'axios'

export const GET_OST_YT = 'GET_OST_YT'

export const getOstYoutube = payload => ({
  type: GET_OST_YT,
  value: payload.data,
  isError: payload.error
})

export const callOstYoutube = payload => dispatch => {
  const queryComputed = payload.query.replace(' ', '+')
  axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${queryComputed}+${payload.kind}&key=AIzaSyC9sfmtzu7w2RVqO80yjZrKGcBNfIVRyds`
    )
    .then(response => {
      dispatch(
        getOstYoutube({
          data: response.data.items[0].id.videoId,
          error: false
        })
      )
    })
    .catch(err => {
      dispatch(getOstYoutube({ data: null, error: true }))
    })
}
