import { UserEffects } from './user.effects';
import { PostEffects } from './post.effects';
import { CommentEffects } from './comment.effects';

export const effects: any[] = [UserEffects, PostEffects, CommentEffects];

export * from './user.effects';
export * from './post.effects';
export * from './comment.effects';
