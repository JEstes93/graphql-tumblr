const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
} = require("graphql");

const PhotoSizeType = require('./PhotoSizeType');

module.exports = new GraphQLObjectType({
    name: 'Photo',
    fields: () => ({
        alt_sizes: {
          type: GraphQLList(PhotoSizeType),
          description: "List of alternate size for this photo, and their respective URLs.",
        },
        original_size: {
          type: PhotoSizeType,
          description: "This photo's original size and URL.",
        },
        caption: {
          type: GraphQLString,
          description: "This photo's caption.",
        }
    })
});