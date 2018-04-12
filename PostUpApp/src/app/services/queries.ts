import gql from 'graphql-tag';

export const fetchPosts = gql`
  query {
    allPosts {
      id
      title
      content
      author {
        id
        firstName
        lastName
        profileImage
      }
    }
  }
`;

export const NEW_COMMENT_ADDED_SUBSCRIPTION = gql`
  subscription newPostCreated($post: String!) {
    newCommentCreated(post: $post) {
      id
      author {
        id
        firstName
        lastName
        profileImage
      }
      parent
      comment
      timestamp
      replyCount
    }
  }
`;

export const NEW_POSTS_CREATED_SUBSCRIPTION = gql`
  subscription {
    newPostCreated {
      id
      title
      content
      author {
        id
        firstName
        lastName
        profileImage
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation createPost($newPost: PostInput!) {
    createPost(post: $newPost) {
      id
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($newComment: CommentInput!, $post: String!) {
    createComment(comment: $newComment, post: $post) {
      id
    }
  }
`;

export const SELECT_POST = gql`
  query postById($id: String!) {
    postById(id: $id) {
      id
      title
      content
      author {
        id
        firstName
        lastName
        profileImage
      }
      views
    }
  }
`;

export const GET_COMMENTS = gql`
  query commentsByParentId($id: String!) {
    commentsByParentId(id: $id) {
      id
      author {
        id
        firstName
        lastName
        profileImage
      }
      parent
      comment
      timestamp
      replyCount
    }
  }
`;

export const DELETE_COMMENT_MUTATION = gql`
  mutation deleteCommentById($id: String!) {
    deleteCommentById(id: $id) {
      id
      author {
        id
        firstName
        lastName
        profileImage
      }
      parent
      comment
      timestamp
      replyCount
    }
  }
`;
