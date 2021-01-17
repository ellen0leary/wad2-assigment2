# Assignment 2 - Web API.
Name: Ellen O Leary (20084694 - Applied Computing)

## Features.

+ Feature 1 - The user is able to see all information related to a movie, including its reviews, by clicking on in
+ Feature 2 - The user is able to write a review for a movie on their favourites list
+ Feature 3 = The user is able to get the movies, from lastest to last realase
+ Feature 4  - The user is able is see a list of people and their details, by clicking on the card


## Installation Requirements
Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json).

Describe getting/installing the software, perhaps:

git clone http:\myrepo.git
followed by installation

git install
## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an .env and what variables to put in it. Give an example of how this might be structured/done. REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret

 ## API Design
Give an overview of your web API design, perhaps similar to the following:

  	          
/api/movies/{movieid}	Get a Movie	N/A	N/A	N/A
/api/movies/{movieid}/reviews	Get all reviews for movie	Create a new review for Movie	N/A	N/A

|   |   GET	 |  POST |   PUT	DELETE |  
|---|---|---|---|
| /api/movies  |  Gets a list of movies |N/A   |  N/A |   
|   |   |   |   |   
|   |   |   |   |  
...	...	...	...	...
If you have your API design on an online platform or graphic, please link to it (e.g. Swaggerhub).

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

Integrating with React App
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example:

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

Extra features
. . Briefly explain any non-standard features, functional or non-functional, developed for the app.

Independent learning.
. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .