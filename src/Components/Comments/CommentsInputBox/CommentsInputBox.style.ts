import styled from 'styled-components';

export const CommentsInputBoxContainer = styled.form`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 20px;
`;

export const CommentsInputBox = styled.input`
  width: 95%;
  height: 100px;

  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 8px;
  padding: 20px;

  outline: none;
`;

export const CommentsWriteButton = styled.button`
  width: 100px;
  height: 40px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.UsPointColor};

  font-family: ${props => props.theme.fontFamily.bold};

  border: none;
  border-radius: 6px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  &:active {
    opacity: 0.5;
    cursor: pointer;
  }
`;
