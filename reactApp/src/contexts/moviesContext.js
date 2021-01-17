import React, { useContext, useState, useEffect, createContext, useReducer } from "react";
import {getMovie, getUpcoming, addToFavourites, addMovieReview} from "../api/movies-api"
import {AuthContext} from "./authorizationContext"

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
      case "add-watchlist":
      return {
        upcoming: state.movies.map((m) =>
          m.id === action.payload.movies.id ? { ...m} : m
        ),
        movies: [...state.moes],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] });
  const [authenticated, setAuthenticated] = useState(false);
  const context = useContext(AuthContext);

  const addToFavorites = (movieId) => {
    console.log(context.userName);
    console.log(movieId);
      addToFavourites(context.userName, movieId)
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { upcoming: state.movies[index] } });
  };

  const addReview = (movie, name, rating , description) => {
    console.log(`movie = ${movie.id}`)
    addMovieReview(movie.id, name, rating , description)
    dispatch({ type: "add-review", payload: { movie, name } });
  };

  useEffect(() => {
    getUpcoming().then((movies) => {
      console.log(movies);
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMovie().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        addToFavorites: addToFavorites,
        addToWatchList : addToWatchList,
        addReview: addReview,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;