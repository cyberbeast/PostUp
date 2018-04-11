import casual from 'casual';
import _ from 'lodash';
import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;
const config = require('./../config/config');

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect(config.db.URL);

const AuthorSchema = Mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	profileImage: String,
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});
const Author = Mongoose.model('Author', AuthorSchema);

const PostSchema = Mongoose.Schema({
	title: String,
	content: String,
	author: { type: Schema.Types.ObjectId, ref: 'Author' },
	timestamp: Date
});
const Post = Mongoose.model('Post', PostSchema);

const CommentSchema = Mongoose.Schema({
	parent: Schema.Types.ObjectId,
	author: { type: Schema.Types.ObjectId, ref: 'Author' },
	comment: String,
	timestamp: Date
});
const Comments = Mongoose.model('Comments', CommentSchema);

const ViewSchema = Mongoose.Schema({
	post: Schema.Types.ObjectId,
	views: { type: Number, default: 0 }
});
const Views = Mongoose.model('View', ViewSchema);

export { Author, Post, Views, Comments };
