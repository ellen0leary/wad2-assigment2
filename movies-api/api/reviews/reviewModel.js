import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    movieID : {type: mongoose.Schema.Types.ObjectId, ref: 'Movies'},
    review : [{
        authorName: {type: String},
        rating: { type: Number},
        description: {type: String}
    }]
});

export default mongoose.model('Review', ReviewSchema);