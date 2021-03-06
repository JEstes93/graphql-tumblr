const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} = require("graphql");

/**
 * Contains data on a blog's theme
 */
module.exports = new GraphQLObjectType({
    name: 'BlogTheme',
    description: "Contains data on a blog's theme.",
    fields: () => ({
        title_font_weight: {
          type: GraphQLString
        },
        title_font: {
          type: GraphQLString
        },
        title_color: {
          type: GraphQLString
        },
        show_title: {
          type: GraphQLBoolean
        },
        show_header_image: {
          type: GraphQLBoolean
        },
        show_description: {
          type: GraphQLBoolean
        },
        show_avatar: {
          type: GraphQLBoolean
        },
        link_color: {
          type: GraphQLString
        },
        header_stretch: {
          type: GraphQLBoolean
        },
        header_image_scaled: {
          type: GraphQLString
        },
        header_image_focused: {
          type: GraphQLString
        },
        header_image: {
          type: GraphQLString
        },
        header_bounds: {
          type: GraphQLString
        },
        body_font: {
          type: GraphQLString
        },
        background_color: {
          type: GraphQLString
        },
        avatar_shape: {
          type: GraphQLString
        },
    }),
});