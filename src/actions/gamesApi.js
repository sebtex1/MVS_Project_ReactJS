/* eslint-disable no-unused-vars */
import axios from 'axios'

export const GET_GAMES = 'GET_GAMES'

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
          id: 1091500,
          name: 'Cyberpunk 2077',
          final_price: 2999,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1621944801',
          short_description:
            'Cyberpunk 2077 est un jeu d’action-aventure en monde ouvert qui se déroule à Night City, une mégalopole obsédée par le pouvoir, la séduction et les modifications corporelles. Vous incarnez V, mercenaire hors-la-loi à la recherche d’un implant unique qui serait la clé de l’immortalité.',
          developers: ['CD PROJEKT RED'],
          publishers: ['CD PROJEKT RED'],
          price_final_formatted: '29,99€',
          tags: [
            {
              id: 3,
              description: 'RPG'
            }
          ],
          isFavorite: false
        },
        {
          id: 1174180,
          name: 'Red Dead Redemption 2',
          final_price: 2999,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1618851907',
          short_description:
            'Red Dead Redemption 2, le jeu épique en monde ouvert de Rockstar Games acclamé par la critique et le mieux noté de cette génération de consoles, arrive maintenant sur PC avec du contenu inédit pour le mode Histoire, des améliorations graphiques et bien plus.',
          developers: ['Rockstar Games'],
          publishers: ['Rockstar Games'],
          price_final_formatted: '29,99€',
          tags: [
            {
              id: '1',
              description: 'Action'
            },
            {
              id: '25',
              description: 'Aventure'
            }
          ],
          isFavorite: false
        },
        {
          id: 1426210,
          name: 'It Takes Two',
          final_price: 2479,
          currency: 'EUR',
          lager_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1426210/capsule_616x353_alt_assets_0.jpg?t=1627656469',
          short_description:
            'Embarquez pour un périple incroyable dans It Takes Two. Grâce au Pass ami*, invitez gratuitement un(e) ami(e) à relever avec vous une myriade de défis délicieusement déstabilisants.',
          developers: ['Hazelight'],
          publishers: ['Electronic Arts'],
          price_final_formatted: '24,79€',
          tags: [
            {
              id: '1',
              description: 'Action'
            },
            {
              id: '25',
              description: 'Aventure'
            }
          ],
          isFavorite: false
        },
        {
          id: 354231,
          name: 'Valve Index VR Kit',
          final_price: 'N/A',
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/subs/354231/capsule_616x353.jpg?t=1623444641',
          short_description: 'N/A',
          developers: ['Valve'],
          publishers: ['Valve'],
          price_final_formatted: 'N/A',
          tags: [],
          isFavorite: false
        },
        {
          id: 5699,
          name: 'Grand Theft Auto V: Premium Edition',
          final_price: 'N/A',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/bundles/5699/qipqf90z2z7h4x3i/capsule_616x353.jpg?t=1611191314',
          currency: 'EUR',
          short_description: 'N/A',
          developers: ['Rockstar Games'],
          publishers: ['Rockstar Games'],
          price_final_formatted: 'N/A',
          tags: [],
          isFavorite: false
        },
        {
          id: 1293830,
          name: 'Forza Horizon 4',
          final_price: 2399,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1293830/capsule_616x353.jpg?t=1622068013',
          short_description:
            'Les saisons dynamiques changent tout sur le plus grand festival automobile au monde. En solo ou en équipe, explorez les magnifiques paysages du Royaume-Uni historique dans un monde ouvert partagé.',
          developers: ['Playground Games'],
          publishers: ['Xbox Game Studios'],
          price_final_formatted: '23,09€',
          tags: [
            {
              id: '9',
              description: 'Course automobile'
            }
          ],
          isFavorite: false
        },
        {
          id: 570940,
          name: 'DARK SOULS™: REMASTERED',
          final_price: 1999,
          currency: 'EUR',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/570940/capsule_616x353.jpg?t=1636678269',
          short_description:
            "int alors l'avènement du Feu... Redécouvrez le jeu de référence salué par la critique. Dans cette splendide version remastérisée, retrouvez Lordran et ses décors époustouflants en haute définition et en 60 fps.",
          developers: ['QLOC'],
          publishers: ['FromSoftware, Inc', 'BANDAI NAMCO Entertainment'],
          price_final_formatted: '19,99€',
          tags: [
            {
              id: '1',
              description: 'Action'
            }
          ],
          isFavorite: false
        },
        {
          id: 814380,
          name: 'Sekiro™: Shadows Die Twice - GOTY Edition',
          final_price: 'N/A',
          currency: 'THB',
          large_capsule_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1603904569',
          short_description:
            'Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.',
          developers: ['FromSoftware'],
          publishers: [
            'Activision (Excluding Japan and Asia)',
            'FromSoftware (Japan)',
            '方块游戏 (Asia)'
          ],
          price_final_formatted: '฿1,163.50',
          tags: [
            {
              id: '1',
              description: 'Action'
            },
            {
              id: '25',
              description: 'Adventure'
            }
          ],
          isFavorite: false
        },
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
