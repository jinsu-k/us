import AvatarWithText from 'Components/User/AvatarWithText';
import { Comment } from 'types';

import { CommentsBlock, CommentsContainer, CommentUserBlock, CommnetDate } from './Comments.style';

type Props = {
  comment: Comment;
};

/**
 * 댓글 View 컴포넌트
 * @param userName
 */
export default function Comments({ comment }: Props) {
  return (
    <CommentsContainer>
      {/* 유저 정보 */}
      <CommentUserBlock>
        <AvatarWithText text={comment.userName} />
        <CommnetDate>&#183; {comment.updatedAt}</CommnetDate>
      </CommentUserBlock>
      <CommentsBlock>{comment.comments}</CommentsBlock>
    </CommentsContainer>
  );
}
