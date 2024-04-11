import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    img: String,
    title: String,
    content: String,
    genre: String,
});

const MovieModel = mongoose.model('Movie', MovieSchema);
export default MovieModel;
