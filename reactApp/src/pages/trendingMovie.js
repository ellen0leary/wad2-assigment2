import React, { useContext } from "react";
import TrendingPageTemplate from '../components/TemplateTrendingListFile'
import {TrendingContext} from '../contexts/trendingContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import goToIMBD from '../components/buttons/GoToIMDBPage'

const TrendingPage = () => {
  const context = useContext(TrendingContext);
  const movies = context.movies;

  return (
    <TrendingPageTemplate
      title="Trending People"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};
export default TrendingPage;