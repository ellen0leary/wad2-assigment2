import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true},
    genre: {type: String, required: true },
  });

  export default mongoose.model('Genre', GenreSchema);