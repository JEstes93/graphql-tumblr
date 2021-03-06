
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
	mutation: require('../Mutations/Mutation')(client),
    query: require('../Queries/FullQuery')(client),
});