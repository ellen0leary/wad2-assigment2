import { useEffect, useState } from "react";
import {getMovieDetails} from '../api/movies-api'

const useMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovieDetails(id).then(movie => {
      console.log(movie)
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useMovie