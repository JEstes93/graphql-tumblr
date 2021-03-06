const tumblr = require("tumblr.js");
const { GraphQLSchema } = require('graphql');

/**
 * Constructor options object
 * @typedef {Object} ConstructorOptions
 * @property {String} consumer_key App's API key
 * @property {String} consumer_secret App's API secret
 * 
 * Full Schema Constructor options object
 * @typedef {Object} FullSchemaOptions
 * @property {String} token App's API key
 * @property {String} token_secret App's API secret
 */

/**
 * GraphQL wrapper for Tumblr's API
 * tumblr-graphql - GraphQL wrapper for Tumblr's API
 * @module tumblr-graphql
 * @param {ConstructorOptions} options Initialization options
 */
module.exports = options => {
	options = options.hasOwnProperty("credentials") ? options.credentials : options;

	if (options.hasOwnProperty("consumer_key") && options.hasOwnProperty("consumer_secret")) {
		return {
			/**
			 * Available schemas
			 */
			Schemas: {
				/**
				 * Includes CRUD and OAuth1.0a-only endpoints
				 * @param {FullSchemaOptions} creds OAuth1.0a credentials to use for the required endpoints
				 * @returns {GraphQLSchema}
				 */
				Full: creds =>
					require(__dirname + "/Schemas/FullSchema")(
						tumblr.createClient({
							...options,
							...creds,
							returnPromises: true
						})
					),
				/**
				 * Only includes endpoints accessible with just an API key
				 * @type {GraphQLSchema}
				 */
				API_Only: require(__dirname + "/Schemas/LimitedSchema")(
					tumblr.createClient({ ...options, returnPromises: true })
				)
			}
		};
	} else throw Error("graphql-tumblr-wrapper requires a consumer_key, and consumer_secret to access the Tumblr API!");
};