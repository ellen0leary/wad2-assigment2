import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Link } from "react-router-dom";

const goToIMBD = ({ movie }) => {

  const handleClick = () => {
    window.location.href = `https://www.imdb.com/name/${movie.idimdb_id}/`
  };
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `https://www.imdb.com/name/${movie.idimdb_id}/`
      }}
    >
      Write a Review
    </Link>
  );
};

export default goToIMBD;