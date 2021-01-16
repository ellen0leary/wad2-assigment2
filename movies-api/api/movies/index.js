import express from 'express';
import {
    getGenres
} from '../tmdb-api';
import movieModel from './movieModel';
import reviewModel from '../reviews/reviewModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  reviewModel.findByReviewsId(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.post('/:id/reviews', (req, res, next) =>{
  const id = parseInt(req.params.id);
  const newReview = reviewModel.findByReviewsId(id);
  console.log(req.body);
  console.log(newReview);
  newReview.reviews.push(req.body);
  res.status(201).json({
    code: 201,
    msg: 'Successful added reiew.',
  });
  newReview.save(); 
});

router.get('/upcoming', (req, res,next) => {
  movieModel.findUpcoming().then(movie => res.status(200).send(movie)).catch(next);
});
router.get('/genres', (req, res,next) => {
  getGenres().then(movies => res.status(200).send(movies))
  .catch((error) => next(error));
});
export default router;