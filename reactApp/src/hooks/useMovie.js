import { useEffect, useState } from "react";
import {getPersonDetails} from '../api/movies-api'

const useMovie = id => {
  console.log("calling moivie")
  console.log(id)
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getPersonDetails(id).then(movie => {
      console.log(movie)
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useMovie