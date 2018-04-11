const mongoose = require('mongoose');
import { PubSub, withFilter } from 'graphql-subscriptions';
import { Author, Post, Views, Comments } from './connectors';

const pubsub = new PubSub();
const resolvers = {
	Query: {
		authorById(_, args) {
			return new Promise((resolve, reject) => {
				if (!ctx.user)
					reject(new Error('Must be logged in to query for Author info.'));
				Author.findById(args.id).then(author => resolve(author));
			});
		},
		allAuthors(_, args, ctx) {
			return Author.find({});
		},
		allPosts() {
			return Post.find({});
		},
		postById(_, args) {
			return Post.findById(args.id, function(err, post) {
				return post;
			});
		},
		allComments(_, args) {
			return Comments.find({});
		},
		commentsByParentId(_, args) {
			// console.log('Requesting comments for: ', args.id);
			return new Promise((resolve, reject) => {
				Comments.find({
					parent: args.id
				}).then(comments => {
					resolve(comments);
				});
			});
		},
		me(_, args, ctx) {
			return new Promise((resolve, reject) => {
				if (!ctx.user)
					reject(new Error('Must be logged in to query for User info.'));

				Author.findById(ctx.user.user._id).then(author => resolve(author));
			});
		}
	},
	Mutation: {
		createPost(root, args, ctx) {
			return new Promise((resolve, reject) => {
				if (!ctx.user) reject(new Error('Must be logged in to post content.'));

				const payload = args.post;
				payload.timestamp = new Date(args.post.timestamp);
				const tempPost = new Post(payload);
				tempPost.author = mongoose.Types.ObjectId(ctx.user.user._id);
				tempPost.save((err, post) => {
					if (err) throw err;
					console.log(post);
					var tempView = new Views({
						post: post._id
					});
					tempView.save();
					pubsub.publish('newPostCreated', { newPostCreated: post });
				});
				resolve(tempPost);
			});
		},
		createAuthor(root, args) {
			const tempAuthor = new Author(args.author);
			tempAuthor.save((err, author) => {
				if (err) throw err;
				console.log(author);
			});
			return tempAuthor;
		},
		createComment(root, args, ctx) {
			return new Promise((resolve, reject) => {
				if (!ctx.user) reject(new Error('Must be logged in to comment.'));

				const payload = args.comment;
				payload.timestamp = new Date(args.comment.timestamp);

				const tempComment = new Comments(payload);
				tempComment.author = mongoose.Types.ObjectId(ctx.user.user._id);

				tempComment.save().then(comment => {
					pubsub.publish('newCommentCreated', {
						newCommentCreated: comment,
						post: args.post,
						parentId: comment.parent.toString()
					});
					resolve(comment);
				});
			});
		},
		deleteCommentById(root, args, ctx) {
			return new Promise((resolve, reject) => {
				if (!ctx.user)
					reject(new Error('Must be logged in to delete a comment.'));

				Comments.findOne({ _id: mongoose.Types.ObjectId(args.id) }).then(
					comment => {
						if (comment.author.equals(ctx.user.user._id)) {
							if (comment.comment === 'This comment has been deleted...') {
								reject(new Error('This comment has previously been deleted.'));
							}
							comment.comment = 'This comment has been deleted...';
							comment.save();
							resolve(comment);
						} else if (!comment.author.equals(ctx.user.user._id)) {
							reject(new Error('Cannot delete comments made by other users.'));
						} else {
							reject(new Error('Unknown error'));
						}
					}
				);
			});
		}
	},
	Author: {
		posts(author) {
			return Post.find({
				author: author.id
			});
		}
	},
	Post: {
		author(post) {
			return Author.findById(post.author);
		},
		views(post) {
			return new Promise((resolve, reject) => {
				Views.findOne({
					post: post._id
				}).then(v => {
					resolve(v.views);
				});
			});
		},
		comments(post) {
			return new Promise((resolve, reject) => {
				Comments.find({ parent: post.id }).then(c => resolve(c));
			});
		}
	},
	Comment: {
		author(comment) {
			return Author.findById(comment.author);
		},
		replies(comment) {
			return new Promise((resolve, reject) => {
				Comments.find({ parent: comment.id }).then(c => resolve(c));
			});
		},
		replyCount(comment) {
			return new Promise((resolve, reject) => {
				Comments.count({ parent: comment.id }).then(c => {
					// console.log('replyCount on ' + comment.id + ' is : ' + c);
					resolve(c);
				});
			});
		}
	},
	Subscription: {
		newPostCreated: {
			subscribe: withFilter(
				() => pubsub.asyncIterator('newPostCreated'),
				(payload, variables) => {
					return true;
				}
			)
		},

		newCommentCreated: {
			subscribe: withFilter(
				() => pubsub.asyncIterator('newCommentCreated'),
				(payload, variables) => {
					return variables.post === payload.post;
				}
			)
		}
	}
};

export default resolvers;
