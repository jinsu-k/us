import styled from 'styled-components';

type HeaderStyleProps = {
  isSelected: boolean;
};

export const HeaderContainer = styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  z-index: 1;
  background-color: #fff;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdcdc;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
`;

export const HeaderMenu = styled.div<HeaderStyleProps>`
  display: block;
  width: 10%;
  padding-top: 20px;
  font-size: 20px;
  font-family: 'NanumBarunGothicBold';
  color: ${props => (props.isSelected ? props.theme.colors.UsPointColor : '')};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.UsPointColor};
  }
`;
