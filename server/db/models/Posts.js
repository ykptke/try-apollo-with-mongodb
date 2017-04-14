import Mongoose from 'mongoose';

const PostsSchema = new Mongoose.Schema({
  title: String,
  text: String,
});

const Posts = Mongoose.model('Posts', PostsSchema);

export default Posts;
