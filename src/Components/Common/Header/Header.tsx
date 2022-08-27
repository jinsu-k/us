import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderLogoBlock, HeaderMenu, HeaderContainer, HeaderWrapper } from './HeaderStyle';
import { ReactComponent as UsLogo } from '../../../Asset/Images/US_LOGO.svg';

const Header = () => {
  const navigate = useNavigate();

  // 클릭한 페이지로 이동 페이지의 url은 paramater로 전달
  const moveToPage = (url: string) => navigate(url);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogoBlock onClick={() => moveToPage('/')}>
          <UsLogo />
        </HeaderLogoBlock>
        <HeaderMenu onClick={() => moveToPage('/usedtrade')}>중고거래</HeaderMenu>
        <HeaderMenu onClick={() => moveToPage('/barter')}>공동구매</HeaderMenu>
        <HeaderMenu onClick={() => moveToPage('/cobuying')}>물물교환</HeaderMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
