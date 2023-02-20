import { useState } from 'react';

import {
  CommentsInputBox,
  CommentsInputBoxContainer,
  CommentsWriteButton,
} from './CommentsInputBox.style';

/**
 * 댓글 입력 컴포넌트
 */
export default function CommentsInput() {
  const [comments, setComments] = useState('');

  return (
    <CommentsInputBoxContainer>
      <CommentsInputBox
        value={comments}
        onChange={e => setComments(e.target.value)}
        placeholder={'댓글을 입력해 주세요.'}
      />
      <CommentsWriteButton>댓글 작성</CommentsWriteButton>
    </CommentsInputBoxContainer>
  );
}
