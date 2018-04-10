const {
  GraphQLObjectType,
  GraphQLList,
	GraphQLInt,
	GraphQLString,
} = require("graphql");

const PostType = require('./PostType');

const UserLikesType = new GraphQLObjectType({
    name: 'UserLikes',
    description: 'Returns list of posts that authenticated user likes',
    fields: () => ({
      liked_count: {
        type: GraphQLInt
      },
      liked_posts: {
        type: GraphQLList(PostType)
      }
    })
});

module.exports = UserLikesType;