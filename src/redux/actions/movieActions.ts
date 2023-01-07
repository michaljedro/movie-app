import { Dispatch } from "redux";
import { MovieAcctionTypes, MovieAction } from "./movieActionsType";

export const getMovies = () => {
  return (dispatch: Dispatch<MovieAction>) => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: MovieAcctionTypes.GET_MOVIES, payload: data });
      })
      .catch((err) => console.log(err));
  };
};
