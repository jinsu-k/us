import styled from 'styled-components';

type HeaderStyleProps = {
  isSelected: boolean;
};

type UserMenuProps = {
  isOpenMenu: boolean;
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

const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderWrapper = styled(FlexRowDiv)`
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
`;

/* 메뉴 카테고리 */
export const HeaderMenuBlock = styled(FlexRowDiv)`
  width: 70%;
`;

export const Menu = styled.div<HeaderStyleProps>`
  display: block;
  width: 15%;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  font-family: ${props => props.theme.fontFamily.bold};
  color: ${props => (props.isSelected ? props.theme.colors.UsPointColor : '')};
  padding-top: 15px;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.UsPointColor};
  }
`;
//

/* 로그인, 회원가입 버튼 */
export const HeaderButtonBlock = styled(FlexRowDiv)`
  position: relative;
  width: 30%;
  justify-content: flex-end;

  .last_item {
    margin-right: 0;
  }
`;

export const Button = styled.span`
  width: 100px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #000;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  font-family: ${props => props.theme.fontFamily.normal};
  margin: 12px 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const CircleAvatar = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d6d6d6;
  margin-top: 2px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.UsPointColor} inset;
  }
`;

export const UserMenu = styled.div<UserMenuProps>`
  width: 150px;
  height: 100px;

  position: absolute;
  top: 63px;
  right: -57px;

  display: ${props => (props.isOpenMenu ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border: 1px solid #a9a9a9;
  border-radius: 6px;
  padding: 6px;

  // 말꼬리 (테두리)
  ::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: -9px;
    border-color: #a9a9a9 transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
  }
  // 말꼬리 (삼각형)
  ::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: -7px;
    border-color: #fff transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
  }
`;

export const UserMenuItem = styled.div`
  width: 100%;
  height: 35px;

  font-size: 14px;
  line-height: 35px;
  border-radius: 3px;
  font-family: 'NanumBarunGothic';

  &:hover {
    cursor: pointer;
    background-color: #d3d3d3;
  }
`;
//
