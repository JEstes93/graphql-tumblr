const { GraphQLObjectType, GraphQLInt, GraphQLList } = require("graphql");

const PostType = require('./PostType');

/**
 * List of posts that a blog likes
 */
module.exports = new GraphQLObjectType({
	name: "BlogLikes",
	description: "Returns list of posts that this blog likes.",
	fields: () => ({
		liked_count: {
			type: GraphQLInt,
			description: 'Number of posts this blog likes.'
    },
    liked_posts: {
			type: GraphQLList(PostType),
			description: 'List of of posts this blog likes.'
    }
	})
});