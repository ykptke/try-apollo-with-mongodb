import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import BlogPost from './BlogPost';

import Posts from '../db/models/Posts';

const RootMutations = new GraphQLObjectType({
  name: 'RootMutations',
  fields: () => ({
    addBlogPost: {
      type: BlogPost,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        text: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (root, { title, text }) {
        return new Promise((resolve, reject) => {
          const Post = new Posts({ title, text });
          Post.save((err, post) => {
            if (err) reject(err)
            else resolve(post)
          });
        })
      }
    },

    updateBlogPost: {
      type: BlogPost,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        text: { type: GraphQLString }
      },
      resolve (root, { id, title, text }) {
        return new Promise((resolve, reject) => {
          Posts.findByIdAndUpdate(
            id,
            { $set: { title, text } },
            { new: true },
            (err, post) => {
              if (err) reject(err)
              else resolve(post)
            }
          );
        })
      }
    }
  })
});

export default RootMutations;
