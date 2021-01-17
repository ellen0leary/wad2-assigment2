import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavouriteMoviesPage from './pages/favouriteMoviePage';
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviePage from "./pages/upcomingMoviePage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import RecommendMovies from "./pages/RecommendationsPage";
import RecommenedContextProvider from "./contexts/recommenedContext";
import TrendingMovies from "./pages/trendingMovie";
import TrendingContextProvider from "./contexts/trendingContext";
import TopRatedPeople from "./pages/topRatedPage";
import TopRatedContextProvider from "./contexts/topRatedContext";
import NowPlayingPage from "./pages/nowPlayingPage";
import NowPlayingContextProvider from "./contexts/nowPlaying";
import LatestContextProvider from "./contexts/lastestContext";
import PeopleDetailsPage from "./pages/peopleDetailsPage"

import AuthContextProvider from "./contexts/authorizationContext";
import LoginPage from "./pages/loginPage"
import ProfilePage from "./pages/profilePage"
import SignUpPage from "./pages/SignUpPage"
import PrivateRoute from "./contexts/privateRoute";

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />     
          <div className="container-fluid">
            <AuthContextProvider>
            <MoviesContextProvider>
              <RecommenedContextProvider>
              <GenresContextProvider>
                <TrendingContextProvider>
                  <TopRatedContextProvider>
                    <NowPlayingContextProvider>
                      <LatestContextProvider>
                <Switch>
                <PrivateRoute  path="/reviews/form" component={AddMovieReviewPage} />
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <Route exact path="/movies/favorites" component={FavouriteMoviesPage} />
                  <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviePage} />
                  <Route exact path="/movies/:id/recommened" component={RecommendMovies} />
                  <Route exact path="/movies/trending" component={TrendingMovies} />
                  <Route exact path="/movies/trending/:id" component={PeopleDetailsPage} />
                  <PrivateRoute exact path = "/profile" component={ProfilePage}></PrivateRoute>
                  <Route path = "/login" component={LoginPage}></Route>
                  <Route exact path = "/signUp" component={SignUpPage}></Route>
                  <Route path="/movies/:id" component={MoviePage} />
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
                </LatestContextProvider>
                </NowPlayingContextProvider>
                </TopRatedContextProvider>
                </TrendingContextProvider>
              </GenresContextProvider>
              </RecommenedContextProvider>
            </MoviesContextProvider>
            </AuthContextProvider>
          </div>
        </div>
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));