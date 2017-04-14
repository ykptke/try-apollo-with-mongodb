import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import BlogPost from './BlogPost';

import Posts from '../db/models/Posts';

const RootQueries = new GraphQLObjectType({
  name: 'RootQueries',
  description: 'core queries of the schema',
  fields: () => ({
    blogPosts: {
      type: new GraphQLList(BlogPost),
      resolve () {
        return new Promise((resolve, reject) => {
          Posts.find((err, posts) => {
            if (err) reject(err)
            else resolve(posts)
          })
        })
      }
    },

    blogPost: {
      type: BlogPost,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (root, { id }) {
        return new Promise((resolve, reject) => {
          Posts.findById(id, (err, post) => {
            if (err) reject(err)
            else resolve(post)
          })
        })
      }
    }
  })
});

export default RootQueries;
