import React, { useState } from "react";
import Header from "../headerMovieList";
import PersonList from "../personList";
import FilterControls from "../filterControls";

const TrendingPageTemplate = ({ movies, title, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedMovies = movies
//     .filter(m => {
//       return m.title.search(nameFilter.toLowerCase()) !== -1;
//     })
//     .filter(m => {
//       return  genre > 0
//         ? m.genre_ids.includes(Number(genreFilter))
//         : true;
//     });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
      <PersonList
        action={action}
        movies={displayedMovies}
      ></PersonList>
    </>
  );
};

export default TrendingPageTemplate ;