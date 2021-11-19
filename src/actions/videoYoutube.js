// https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=Zelda+BOTW+OST&key=AlzaSyc9sfmtzu7w2RVqO80yjZrKGcBNflVRyds
/* eslint-disable no-unused-vars */
import axios from 'axios'

export const GET_VIDEO_YT = 'GET_VIDEO_YT'

export const getVideoYoutube = payload => ({
  type: GET_VIDEO_YT,
  value: payload.data,
  isError: payload.error
})

export const callVideoYotube = payload => dispatch => {
  const queryComputed = payload.query.replace(' ', '+')
  axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${queryComputed}+${payload.kind}&key=AlzaSyc9sfmtzu7w2RVqO80yjZrKGcBNflVRyds`
    )
    .then(response => {
      dispatch(getVideoYoutube({ data: response, error: false }))
    })
    .catch(err => {
      dispatch(getVideoYoutube({ data: null, error: true }))
    })
}
