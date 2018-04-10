const {
  GraphQLObjectType,
  GraphQLList,
	GraphQLInt,
	GraphQLString,
} = require("graphql");

// const PostType = require('./PostType');
const BlogSimpleType = require('./BlogSimpleType');

const UserFollowingType = new GraphQLObjectType({
    name: 'UserFollowing',
    description: 'Returns list of blogs that authenticated user is following',
    fields: () => ({
      blogs: {
        type: GraphQLList(BlogSimpleType)
      },
      total_blogs: {
        type: GraphQLInt
      }
    })
});

module.exports = UserFollowingType;