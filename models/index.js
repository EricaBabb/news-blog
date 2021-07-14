// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations

Post.belongsTo(User, {
  foreignKey: 'userid'
});

Comment.belongsTo(User, {
  foreignKey: 'userid'
});

Post.hasMany(Comment, {
  foreignKey: 'postid'
});

module.exports = { User, Post, Comment };
