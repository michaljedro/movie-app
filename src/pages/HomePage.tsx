import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut } from "../firebase";
import { getMovies } from "../redux/actions/movieActions";
import { MovieAcctionTypes } from "../redux/actions/movieActionsType";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { MovieState } from "../redux/reducer/movieReducer";
type Props = {};

export const HomePage = (props: Props) => {
  const movies = useAppSelector((state: MovieState) => [...state.movies]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(movies);
  return (
    <div>
      <h1>HomePage</h1>
      {movies && movies.map((movie) => <p>{movie.title}</p>)}
      <button onClick={logOut}>logout</button>
    </div>
  );
};
