import userModel from '../api/users/userModel';
import genreModel from '../api/genres/genresModel';
import genresModel from '../api/genres/genresModel';
import movieModel from '../api/movies/movieModel';
import peopleModel from '../api/people/peopleModel';
import {movies} from './movies.js';
import {people} from './people.js';

const users = [
    {
        'username' : 'user1',
        'password' : 'test1',
    },
    {
        'username' : 'user2',
        'password' : 'test2',
    },
];
const genres = [
  {
    'name' : 'Movie1',
    'genre' : "Genre1",
  },
  {
    'name' : 'Movie2',
    'genre' : "Genre2",
  },
];
// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
      await genresModel.deleteMany();
      await genres.forEach(genre => genreModel.create(genre));
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadPeople(){
  console.log("load people data");
  console.log(people.length);
  try {
    await peopleModel.deleteMany();
    await peopleModel.collection.insertMany(people);
    console.info(`${people.length} people were successfully stored.`);
  }catch(err){
    console.error(`failed to Laod people Data: ${err}`);
  }
}