const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
} = require("graphql");

/**
 * Contains URL and size data about a Tumblr photo
 */
module.exports = new GraphQLObjectType({
    name: 'PhotoSize',
    description: 'Contains URL and size data about a Tumblr photo.',
    fields: () => ({
        height: {
          type: GraphQLInt,
          description: "Photo's height in pixels.",
        },
        width: {
          type: GraphQLInt,
          description: "Photo's width in pixels.",
        },
        url: {
          type: GraphQLString,
          description: "Photo's URL.",
        },
    }),
});