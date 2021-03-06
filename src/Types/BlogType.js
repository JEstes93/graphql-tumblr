const {
	GraphQLObjectType,
	GraphQLString,
  GraphQLBoolean,
} = require("graphql");

const BlogThemeType = require('./BlogThemeType');

/**
 * Contains information on a Tumblr blog
 */
module.exports = new GraphQLObjectType({
    name: 'Blog',
    description: "Contains information on a Tumblr blog.",
    fields: () => ({
        can_be_followed: {
          type: GraphQLBoolean,
          description: "If true, this blog can be followed.",
        },
        share_following: {
          type: GraphQLBoolean,
          description: "If true, this blog shares it's followers publicly.",
        },
        share_likes: {
          type: GraphQLBoolean,
          description: "If true, this blog shares it's likes publicly.",
        },
        theme: {
          type: BlogThemeType,
          description: "This blog's theme data.",
          resolve: blog => blog.theme,
        },
        active: {
          type: GraphQLBoolean,
          description: "If true, this blog is currently online.",
        },
        name: {
          type: GraphQLString,
          description: "This blog's name.",
        }
    })
});