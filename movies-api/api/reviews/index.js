import express from 'express';
import Review from './reviewModel';

const router = express.Router();

//get all reviews
router.get('/' , (req, res, next) => {
    Review.find()
    .then(reviews => res.status(200).json(reviews))
    .catch(next);
});

export default router;