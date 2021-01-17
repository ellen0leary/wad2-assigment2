import React, { useContext } from "react";
import TrendingPageTemplate from '../components/TemplateTrendingListFile'
import {TrendingContext} from '../contexts/trendingContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'


const TrendingPage = () => {
  const context = useContext(TrendingContext);
  const movies = context.movies;
  
  return (
    <TrendingPageTemplate
      title="Trending Movies this week"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};
export default TrendingPage;