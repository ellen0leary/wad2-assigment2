# Assignment 2 - Web API.
Name: Ellen O Leary (20084694 - Applied Computing)

## Features.

+ Feature 1 - The user is able to see all information related to a movie, including its reviews, by clicking on in
+ Feature 2 - The user is able to write a review for a movie on their favourites list
+ Feature 3 = The user is able to get the movies, from lastest realase
+ Feature 4  - The user is able is see a list of people and their details, by clicking on the card


## Installation Requirements
The installition of this app is not complicated. Here are the steps 
git clone http:\myrepo.git
followed by installation
You may need to run   npm install    on your apps

git install
## API Configuration
You will need a .env file before running this project. Here is what i had in my. This was in my movies api app

NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=
mongoDB=YourMongoURL
MONGO_DB=YourMongoURL
seedDb=true
secret=YourJWTSecret


in my react app i had a .env file with this

REACT_APP_TMDB_KEY=
 ## API Design
Give an overview of your web API design, perhaps similar to the following:


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

in order to call my movies-api app from my react app, i created a file in react app and added fetch request in to the file. These fetch request went to specific pathss in the movies-api.
Here are some examples of the fetch requests :
![][fetch1]


![][fetch2]

---------------------------------
[routes]: ./public/routes.png
[proxy]: ./public/proxy.png
[fetch1]: ./public/fetch1.png
[fetch2]: ./public/fetch2.png
