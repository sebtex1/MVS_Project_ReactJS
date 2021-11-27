import { GET_GAMES, SET_FAVORITES } from '../actions/gamesApi'

const initialState = {
  value: [],
  isError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        value: action.value,
        isError: action.isError
      }
    case SET_FAVORITES:
      return {
        ...state,
        value: state.value.map(
          (game, i) =>
            i === action.value.id
              ? { ...game, isFavorite: action.value.isFavorite } // change l'etat favoris si l'id correspond
              : game // ne modifie pas l'objet
        )
      }

    default:
      return state
  }
}
