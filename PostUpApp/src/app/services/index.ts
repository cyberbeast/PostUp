import { UserService } from './user.service';
import { PostService } from './post.service';

export const services: any[] = [UserService, PostService];

export * from './user.service';
export * from './post.service';
