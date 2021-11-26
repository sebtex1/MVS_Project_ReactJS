/* eslint-disable no-unused-vars */
import axios from 'axios'

export const GET_FAMOUS_GAMES = 'GET_FAMOUS_GAMES'

export const getFamousGames = payload => ({
  type: GET_FAMOUS_GAMES,
  value: payload.data,
  isError: payload.error
})

export const callFamousGamesLocal = payload => dispatch => {
  dispatch(
    getFamousGames({
      data: [
        {
          id: 1091500,
          name: 'Cyberpunk 2077',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1621944801'
        },
        {
          id: 1174180,
          name: 'Red Dead Redemption 2',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1618851907'
        },
        {
          id: 1426210,
          name: 'It Takes Two',
          lager_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1426210/capsule_616x353_alt_assets_0.jpg?t=1627656469'
        },
        {
          id: 354231,
          name: 'Valve Index VR Kit',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/subs/354231/capsule_616x353.jpg?t=1623444641'
        },
        {
          id: 5699,
          name: 'Grand Theft Auto V: Premium Edition',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/bundles/5699/qipqf90z2z7h4x3i/capsule_616x353.jpg?t=1611191314'
        },
        {
          id: 1517290,
          name: 'Battlefield™ 2042',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1517290/capsule_616x353.jpg?t=1637392604'
        },
        {
          id: 1293830,
          name: 'Forza Horizon 4',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1293830/capsule_616x353.jpg?t=1622068013'
        },
        {
          id: 1248130,
          name: 'Farming Simulator 22',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1248130/capsule_616x353.jpg?t=1637757556'
        },
        {
          id: 570940,
          name: 'DARK SOULS™: REMASTERED',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/570940/capsule_616x353.jpg?t=1636678269'
        },
        {
          id: 814380,
          name: 'Sekiro™: Shadows Die Twice - GOTY Edition',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1603904569'
        }
      ],
      error: false
    })
  )
}

// Du au CORS axios est remplacer sur cette API nous utilisons une base en local de leurs infos
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
