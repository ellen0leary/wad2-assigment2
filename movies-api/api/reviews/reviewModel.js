import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    movieID : {type: Number},
    reviews : [{
        authorName: {type: String, required: true},
        rating: { type:String, required: true},
        description: {type: String, required: true}
    }]
});

ReviewSchema.statics.findByReviewsId = function (id) {
    return this.findOne({ movieID: id });
  };
export default mongoose.model('Review', ReviewSchema);