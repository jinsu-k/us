import styled from 'styled-components';

export const HomeArticle = styled.article``;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: wrap;
  padding: 10% 0 50px;
  margin: 0;
`;

export const HomeSectionTitle = styled.div`
  font-size: 24px;
  font-family: ${props => props.theme.fontFamily.bold};
  text-align: center;
  width: 100%;
  padding-bottom: 50px;
`;
