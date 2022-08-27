import styled from 'styled-components';

type HeaderStyleProps = {
  isSelected: boolean;
};

export const HeaderContainer = styled.div`
  width: 100%;
  height: 56px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
`;

export const HeaderLogoBlock = styled.div`
  padding-top: 10px;
  width: 10%;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.div<HeaderStyleProps>`
  display: block;
  padding-top: 20px;
  width: 10%;
  font-size: 20px;

  color: ${props => (props.isSelected ? '#84e0cb' : '')};

  &:hover {
    cursor: pointer;
    color: #84e0cb;
  }
`;

// #84e0cb
