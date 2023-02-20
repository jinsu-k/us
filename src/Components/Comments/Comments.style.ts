import styled from 'styled-components';

export const CommentsContainer = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;

  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 8px;

  margin-bottom: 10px;
`;

export const CommentUserBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 20px 20px 10px 20px;
`;

export const CommnetDate = styled.div`
  font-size: 10px;
  color: ${props => props.theme.colors.gray2};

  margin-left: 5px;
`;

export const CommentsBlock = styled.div`
  width: 100%;

  font-size: 14px;
  font-family: ${props => props.theme.fontFamily.normal};

  padding: 10px 20px 10px 20px;
  margin-top: 10px;
`;
