export interface Comment {
  parent: string;
  id: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
  comment: string;
  replyCount: number;
  timestamp: string;
}

export interface NewComment {
  parent: string;
  comment: string;
  timestamp: string;
}
