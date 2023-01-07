import {
  Movie,
  MovieAcctionTypes,
  MovieAction,
} from "../actions/movieActionsType";
export type MovieState = {
  movies: Movie[];
};
const initialState = {
  movies: [],
};

export const movieReducer = (
  state: MovieState = initialState,
  action: MovieAction
) => {
  switch (action.type) {
    case MovieAcctionTypes.GET_MOVIES:
      return {
        movies: action.payload,
      };
    default:
      return state;
  }
};
