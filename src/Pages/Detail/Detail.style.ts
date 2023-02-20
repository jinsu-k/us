import styled from 'styled-components';

export const DetailContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 15px;
`;

export const ContentsWrapper = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ContentsInfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ContentsTitle = styled.div`
  font-size: 24px;
  font-family: ${props => props.theme.fontFamily.bold};
  margin-bottom: 20px;
`;

export const ImageBlock = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  margin-top: 15px;
`;

export const MainTextBlock = styled.div`
  font-size: 16px;
  font-family: ${props => props.theme.fontFamily.normal};
`;

export const Hr = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  color: gray;
  border: 1px solid ${props => props.theme.colors.gray};
`;

export const CommentsWrapper = styled(ContentsWrapper)``;

export const CommentsInfo = styled.div`
  width: 100%;

  font-size: 16px;
  font-family: ${props => props.theme.fontFamily.bold};

  margin-top: 10px;
  margin-bottom: 20px;
`;
