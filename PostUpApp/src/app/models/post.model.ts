export interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
  timestamp: string;
}

export interface NewPost {
  title: string;
  content: string;
  timestamp: string;
}

export interface SelectedPost {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
  views: number;
  timestamp: string;
}
