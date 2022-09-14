import styled from 'styled-components';

export const CategoryArticle = styled.article``;

export const CategorySection = styled.section``;

export const CategoryTopBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5%;
`;

export const CategoryTitle = styled.div`
  width: 20%;
  font-size: 24px;
  font-family: 'NanumBarunGothicBold';
  text-align: left;
  padding-bottom: 50px;
`;

export const CategorySearchBar = styled.input`
  width: 30%;
  height: 40px;
`;

export const CategoryContentsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  column-gap: 3%;
  padding-top: 1%;
  padding-bottom: 3%;
`;

export const CategoryProductInfoBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flext;
  flex-direction: row;
`;
