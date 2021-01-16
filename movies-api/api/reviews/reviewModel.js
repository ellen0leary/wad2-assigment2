import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    movieID : {type: Number},
    reviews : [{
        authorName: {type: String},
        rating: { type:String},
        description: {type: String}
    }]
});

ReviewSchema.statics.findByReviewsId = function (id) {
    return this.findOne({ movieID: id });
  };
export default mongoose.model('Review', ReviewSchema);