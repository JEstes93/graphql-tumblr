// const UserInfoBlogsType = require(__dirname + '../Types/UserInfoBlogsType');
// const UserInfoType = require(__dirname + '../Types/UserInfoType');
// const TrailType = require(__dirname + '../Types/TrailType');
// const BlogThemeType = require(__dirname + '../Types/BlogThemeType');
// const BlogType = require(__dirname + '../Types/BlogType');
// const PhotoType = require(__dirname + '../Types/PhotoType');
// const PostType = require(__dirname + '../Types/PostType');
// const UserLikesType = require(__dirname + '../Types/UserLikesType');
// const UserFollowingType = require(__dirname + '../Types/UserFollowingType');
// const BlogLikesType = require(__dirname + '../Types/BlogLikesType');
// const BlogPostsType = require(__dirname + '../Types/BlogPostsType');

const UserInfoBlogsType = require('../Types/UserInfoBlogsType');
const UserInfoType = require('../Types/UserInfoType');
const TrailType = require('../Types/TrailType');
const BlogThemeType = require('../Types/BlogThemeType');
const BlogType = require('../Types/BlogType');
const PhotoType = require('../Types/PhotoType');
const PostType = require('../Types/PostType');
const UserLikesType = require(+ '../Types/UserLikesType');
const UserFollowingType = require('../Types/UserFollowingType');
const BlogLikesType = require('../Types/BlogLikesType');
const BlogPostsType = require('../Types/BlogPostsType');

/**
 * Contains all the core GraphQLObjectTypes for this lib
 */
module.exports = {
    UserInfoBlogsType,
    UserInfoType,
    UserLikesType,
    UserFollowingType,
    TrailType,
    BlogThemeType,
    BlogType,
    PhotoType,
    PostType,
    BlogLikesType,
    BlogPostsType,
};