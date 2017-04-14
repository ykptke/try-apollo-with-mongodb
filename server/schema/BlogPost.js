import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

const BlogPost = new GraphQLObjectType({
  name: 'BlogPost',
  description: 'Represent a blog post',
  fields: () => ({
    id: {
      type:  new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    text: {
      type: GraphQLString
    }
  })
});

export default BlogPost;
