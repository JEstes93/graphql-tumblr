
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
    GraphQLBoolean,
    GraphQLFloat
} = require("graphql");

module.exports = client => new GraphQLSchema({
    query: require('../Queries/LimitedQuery')(client),
});