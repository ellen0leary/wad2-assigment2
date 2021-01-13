import express from 'express';
import Genre from './genresModel';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', (req, res,next) => {
    Genre.find().then(genres =>  res.status(200).json(genres)).catch(next);
});

export default router;