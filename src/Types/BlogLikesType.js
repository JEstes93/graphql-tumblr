const { GraphQLObjectType, GraphQLInt, GraphQLList } = require("graphql");

const PostType = require('./PostType');

const BlogLikesType = new GraphQLObjectType({
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

module.exports = BlogLikesType;
