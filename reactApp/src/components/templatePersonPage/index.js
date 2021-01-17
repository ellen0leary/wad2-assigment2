import React from "react";
import MovieHeader from '../headerPerson'
import "./PersonPage.css";

const TemplateMoviePage = ({ person, children }) => {
  return (
    <>
      <MovieHeader person={person} />
      <div className="row">
        <div className="col-3">
          <img
            src={
                person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={"pls"}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateMoviePage;