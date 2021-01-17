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
| /api/movies  |  Gets a list of movies - if ?action=latest the movies will be sorted in asscending order |N/A   |  N/A |   
|  /api/movies/{movieid} | Finds a movie with the same id  | N/A  |  N/A |   
| /api/movies/{movieid}/reviews	  | Gets all reviews related to a movie  | Adds a review to a movie  | N/A  |  
|/api/movies/geners|Gets genres from tmdb|N/A |N/A |
|---|---|---|---|
|/api/genres|gets all genres from the schema|N/A |N/A |
|---|---|---|---|
|/api/people/|gets all people in database|N/A |N/A |
|/api/people/{peopleId}|gets the person with the matchong id|N/A |N/A |
|---|---|---|---|
|/api/review/|gets all reviews in database|N/A|N/A|
|---|---|---|---|
|api/user/|allows user to login or register|N/A|N/A|
|api/user/{id}|N/A|allows the user to update user|N/A|
api/user/{id}/favourites|allows a user to see favourites|allows the user to add a favourite|N/A|


## Security and Authentication
I used JSON Web token to add authication to my app.
I also protected some of my apps routes, such as the review form, latest movies page and profile page

![][routes]

## Integrating with React App
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example:

To link my react app with my movies-api app, i put a proxy link to the movies api in the react app's packet.json file. It looked like this:
![][proxy]
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


---------------------------------
[routes]: ./public/routes.png
[proxey]: ./public/proxy.png