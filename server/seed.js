import Posts from './db/models/Posts';

const data = [
  { title: 'Arunoda - Try Apollo', text: 'https://github.com/arunoda/try-apollo' },
  { title: 'Apollo Client', text: 'https://github.com/apollographql/apollo-client' },
  { title: 'Mongoose', text: 'http://mongoosejs.com/docs/'},
];

const seed = () => {
  data.forEach((d) => {
    const Post = new Posts(d);
    Post.save((err, post) => {
      if (err) console.log('err on save data', err)
      else console.log('saved:', post);
    });
  });
};

export default seed;
