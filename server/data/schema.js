import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  allAuthors: [Author]
  allPosts: [Post]
  allComments: [Comment]
  
  authorById(id: String!): Author
  postById(id: String!): Post  
  commentsByParentId(id: String!): [Comment]

  me: Author
}

type Comment {
  id: String!
  parent: String!
  author: Author!
  comment: String!
  replyCount: Int
  replies: [Comment]
  timestamp: String!
}

type Author {
  id: String
  firstName: String
  lastName: String
  profileImage: String
  posts: [Post]
}

type Post {
  id: String
  title: String
  content: String
  views: Int
  author: Author
  comments: [Comment]
  timestamp: String!
}

type Mutation {
  createAuthor(author: AuthorInput!): Author
  createPost(post: PostInput!): Post
  createComment(comment: CommentInput!, post: String!): Comment
  deleteCommentById(id: String!): Comment
}

input CommentInput {
  parent: String!
  comment: String!
  timestamp: String!
}

input PostInput {
  title: String!
  content: String!
  timestamp: String!
}

input AuthorInput {
  firstName: String!
  lastName: String!
}

type Subscription {
  newPostCreated: Post
  newCommentCreated(post: String!): Comment
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
