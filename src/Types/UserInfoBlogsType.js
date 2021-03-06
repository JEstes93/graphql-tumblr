const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
    GraphQLBoolean,
    GraphQLFloat
} = require("graphql");

module.exports = new GraphQLObjectType({
	name: "UserInfoBlogs",
	fields: () => ({
		admin: {
			type: GraphQLBoolean,
			resolve: blog => blog.admin
		},
		ask: {
			type: GraphQLBoolean,
			resolve: blog => blog.ask
		},
		ask_anon: {
			type: GraphQLBoolean,
			resolve: blog => blog.ask_anon
		},
		ask_page_title: {
			type: GraphQLString,
			resolve: blog => blog.ask_page_title
		},
		can_send_fan_mail: {
			type: GraphQLBoolean,
			resolve: blog => blog.can_send_fan_mail
		},
		can_subscribe: {
			type: GraphQLBoolean,
			resolve: blog => blog.can_subscribe
		},
		description: {
			type: GraphQLString,
			resolve: blog => blog.description
		},
		drafts: {
			type: GraphQLInt,
			resolve: blog => blog.drafts
		},
		facebook: {
			type: GraphQLString,
			resolve: blog => blog.facebook
		},
		facebook_opengraph_enabled: {
			type: GraphQLString,
			resolve: blog => blog.facebook_opengraph_enabled
		},
		followed: {
			type: GraphQLBoolean,
			resolve: blog => blog.followed
		},
		followers: {
			type: GraphQLInt,
			resolve: blog => blog.followers
		},
		is_adult: {
			type: GraphQLBoolean,
			resolve: blog => blog.is_adult
		},
		is_blocked_from_primary: {
			type: GraphQLBoolean,
			resolve: blog => blog.is_blocked_from_primary
		},
		is_nsfw: {
			type: GraphQLBoolean,
			resolve: blog => blog.is_nsfw
		},
		likes: {
			type: GraphQLInt,
			resolve: blog => blog.likes
		},
		messages: {
			type: GraphQLInt,
			resolve: blog => blog.messages
		},
		name: {
			type: GraphQLString,
			resolve: blog => blog.name
		},
		posts: {
			type: GraphQLInt,
			resolve: blog => blog.posts
		},
		primary: {
			type: GraphQLBoolean,
			resolve: blog => blog.primary
		},
		queue: {
			type: GraphQLInt,
			resolve: blog => blog.queue
		},
		reply_conditions: {
			type: GraphQLString,
			resolve: blog => blog.reply_conditions
		},
		share_likes: {
			type: GraphQLBoolean,
			resolve: blog => blog.share_likes
		},
		subscribed: {
			type: GraphQLBoolean,
			resolve: blog => blog.subscribed
		},
		title: {
			type: GraphQLString,
			resolve: blog => blog.title
		},
		total_posts: {
			type: GraphQLInt,
			resolve: blog => blog.total_posts
		},
		tweet: {
			type: GraphQLString,
			resolve: blog => blog.tweet
		},
		twitter_enabled: {
			type: GraphQLBoolean,
			resolve: blog => blog.twitter_enabled
		},
		twitter_send: {
			type: GraphQLBoolean,
			resolve: blog => blog.twitter_send
		},
		type: {
			type: GraphQLString,
			resolve: blog => blog.type
		},
		updated: {
			type: GraphQLInt,
			resolve: blog => blog.updated
		},
		url: {
			type: GraphQLString,
			resolve: blog => blog.url
		}
	})
});