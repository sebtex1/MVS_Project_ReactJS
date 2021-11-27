/* eslint-disable no-unused-vars */
import axios from 'axios'

export const GET_GAMES = 'GET_GAMES'
export const SET_FAVORITES = 'SET_FAVORITES'

export const getGames = payload => ({
  type: GET_GAMES,
  value: payload.data,
  isError: payload.error
})

export const callApiGamesLocal = payload => dispatch => {
  dispatch(
    getGames({
      data: [
        {
          id: 1775390,
          name: 'Substance 3D Painter 2022',
          final_price: 8508,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1775390/capsule_616x353.jpg?t=1637773788',
          short_description:
            "Adobe Substance 3D Painter est l'application de texturing de référence pour les professionnels et les amateurs de 3D. Développeurs de jeux AAA ou indépendants, studios d'animation ou d'effets visuels, des professionnels de tout le secteur utilisent Painter pour donner vie à leurs créations.",
          developers: ['Adobe'],
          publishers: ['Adobe'],
          price_final_formatted: '85,08€',
          tags: [
            { id: 51, description: 'Animation & Modélisation' },
            { id: 60, description: 'Développement de jeu' }
          ],
          isFavorite: false
        },
        {
          id: 1348661,
          name: 'Expansion - Hearts of Iron IV: No Step Back',
          final_price: 1999,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1348661/capsule_616x353.jpg?t=1637683465',
          short_description:
            'The Second World War’s hardest fighting was on the Eastern Front of Europe. Rival regimes threw men and machines into a bitter struggle through sun and snow, marsh and steppe, and, in the end, the Soviet Union emerged victorious as one of the most powerful nations on earth.',
          developers: ['Paradox Development Studio'],
          publishers: ['Paradox Interactive'],
          price_final_formatted: '32,00 TL',
          tags: [
            { id: 28, description: 'Simulation' },
            { id: 2, description: 'Stratégie' }
          ],
          isFavorite: false
        },
        {
          id: 1248130,
          name: 'Farming Simulator 22',
          final_price: 3999,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1248130/capsule_616x353.jpg?t=1637757556',
          short_description:
            'Créez votre exploitation, et que la récolte soit bonne ! Cultivez vos plantes, occupez-vous des animaux, gérez vos productions et relevez les défis des saisons.',
          developers: ['Giants Software'],
          publishers: ['Giants Software'],
          price_final_formatted: '39,99€',
          tags: [{ id: 28, description: 'Simulation' }],
          isFavorite: false
        },
        {
          id: 1517290,
          name: 'Battlefield™ 2042',
          final_price: 5999,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1517290/capsule_616x353.jpg?t=1637392604',
          short_description:
            'Battlefield™ 2042 est un jeu de tir à la première personne qui marque le retour à la guerre totale ; emblématique de la franchise. Dans un futur proche où le chaos a changé le monde, adaptez-vous et triomphez sur des champs de bataille dynamiques grâce à votre escouade et un arsenal de pointe.',
          developers: ['DICE'],
          publishers: ['Electronic Arts'],
          price_final_formatted: '59,99€',
          tags: [
            { id: 1, description: 'Action' },
            { id: 25, description: 'Aventure' },
            { id: 4, description: 'Occasionnel' }
          ],
          isFavorite: false
        },
        {
          id: 773370,
          name: 'Exo One',
          final_price: 1599,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/773370/capsule_616x353.jpg?t=1637575019',
          short_description:
            "Un signal étrange... un vaisseau d'un autre monde... un voyage interplanétaire défiant la gravité, à travers le temps et l'espace.",
          developers: ['Exbleative'],
          publishers: ['Future Friends Games', 'Exbleative'],
          price_final_formatted: '15,99€',
          tags: [
            { id: 25, description: 'Aventure' },
            { id: 4, description: 'Occasionnel' },
            { id: 23, description: 'Indépendant' },
            { id: 28, description: 'Simulation' }
          ],
          isFavorite: false
        },
        {
          id: 1371580,
          name: 'Myth of Empires',
          final_price: 2249,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1371580/capsule_616x353.jpg?t=1637754697',
          short_description:
            "Doté d'un niveau élevé de liberté, les joueurs se battront pour gagner leur place dans un monde déchiré par la guerre. Construisez des forteresses, dirigez des armées dans des batailles massives, assiégez des villes ennemies et établissez votre propre empire!",
          developers: ['Angela Game'],
          publishers: ['Antiidelay'],
          price_final_formatted: '22,49€',
          tags: [
            { id: 1, description: 'Action' },
            { id: 25, description: 'Aventure' },
            { id: 23, description: 'Indépendant' },
            { id: 29, description: 'Massivement Multijoueur' },
            { id: 3, description: 'RPG' },
            { id: 28, description: 'Simulation' },
            { id: 2, description: 'Stratégie' },
            { id: 70, description: 'Accès anticipé' }
          ],
          isFavorite: false
        },
        {
          id: 1217060,
          name: 'Gunfire Reborn',
          final_price: 1259,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1217060/capsule_616x353.jpg?t=1637890533',
          short_description:
            "Gunfire Reborn est un jeu d'aventure divisé en niveaux et mêlant jeu de tir à la première personne, Roguelite et JDR. Les joueurs prennent le contrôle de héros possédant diverses compétences à combiner pour varier leur expérience.",
          developers: ['Duoyi Games'],
          publishers: ['Duoyi Games'],
          price_final_formatted: '12,59€',
          tags: [
            { id: 1, description: 'Action' },
            { id: 25, description: 'Aventure' },
            { id: 23, description: 'Indépendant' },
            { id: 3, description: 'RPG' }
          ],
          isFavorite: false
        },
        {
          id: 1276790,
          name: 'Ruined King: A League of Legends Story™',
          final_price: 2999,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1276790/capsule_616x353.jpg?t=1637186196',
          short_description:
            "Dressez-vous contre la Ruine - Contrôlez un groupe de champions de League of Legends, explorez Bilgewater et naviguez jusqu'aux Îles obscures pour découvrir ce que cache la Brume noire dans ce jeu de rôle immersif au tour par tour.",
          developers: ['Airship Syndicate'],
          publishers: ['Riot Forge'],
          price_final_formatted: '29,99€',
          tags: [
            { id: 23, description: 'Indépendant' },
            { id: 3, description: 'RPG' }
          ],
          isFavorite: false
        },
        {
          id: 1266840,
          name: 'The Last Stand: Aftermath',
          final_price: 2099,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1266840/capsule_616x353.jpg?t=1637073796',
          short_description:
            "Un nouveau rogue-lite solo d'action/aventure par les créateurs de The Last Stand: Union City et Dead Zone. Infecté par un virus zombie, vous partez explorer un monde post-apocalyptique afin de trouver une lueur d'espoir pour les survivants. Vous pouvez encore faire la différence. N'abandonnez pas.",
          developers: ['Con Artist Games'],
          publishers: ['Armor Games Studios'],
          price_final_formatted: '20,99€',
          tags: [
            { id: 1, description: 'Action' },
            { id: 25, description: 'Aventure' },
            { id: 23, description: 'Indépendant' }
          ],
          isFavorite: false
        },
        {
          id: 846770,
          name: 'DYSMANTLE',
          final_price: 1299,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/846770/capsule_616x353.jpg?t=1637313356',
          short_description:
            'Émergez de votre abri. Détruisez tout ce qui vous tombe sous la main. Échappez à cette île maudite. ⚔️🔨🎣🌱🌵🍰 Explorez, luttez, progressez, survivez, récupérez, fabriquez, récoltez, chassez, construisez, cultivez, réfléchissez, pêchez, cuisinez. En un mot : vivez ! À vous les joies et les déboires de ce monde post-apocalyptique !',
          developers: ['10tons Ltd'],
          publishers: ['10tons Ltd'],
          price_final_formatted: '12,99€',
          tags: [
            { id: 1, description: 'Action' },
            { id: 25, description: 'Aventure' },
            { id: 23, description: 'Indépendant' },
            { id: 3, description: 'RPG' },
            { id: 28, description: 'Simulation' }
          ],
          isFavorite: false
        }
      ],
      error: false
    })
  )
}

export const setFavorites = payload => ({
  type: SET_FAVORITES,
  value: payload
})

// Du au CORS axios est remplacer sur cette API nous utilisons une base en local de leurs infos
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
