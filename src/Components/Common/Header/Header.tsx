import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { selectedHeaderState } from 'Recoils';
import { useLocation, useNavigate } from 'react-router-dom';

import { HeaderLogoBlock, HeaderMenu, HeaderContainer, HeaderWrapper } from './HeaderStyle';
import { ReactComponent as UsLogo } from '../../../Asset/Images/US_LOGO.svg';

const HEADER_URL_LIST = ['/usedtrade', '/barter', '/cobuying'];

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation(); // 현재 URL location에서 pathname만 사용
  const [selectedHeader, setSelectedHeader] = useRecoilState(selectedHeaderState); // URL을 읽어 현재 선택된 Header가 있을경우 selectedHeaderStated에 추가

  // pathname이 변경될 때 HEADER_URL_LIST에 존재하는 pathname일 경우 selectedHeaderState 변경, 아닐 경우 default 값으로 초기화
  useEffect(() => {
    if (HEADER_URL_LIST.includes(pathname)) setSelectedHeader(pathname);
    else setSelectedHeader('');
  }, [pathname]);

  // 클릭한 페이지로 이동 페이지의 url은 paramater로 전달
  const moveToPage = (url: string) => navigate(url);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogoBlock onClick={() => moveToPage('/')}>
          <UsLogo />
        </HeaderLogoBlock>
        <HeaderMenu
          isSelected={selectedHeader === '/usedtrade'}
          onClick={() => moveToPage('/usedtrade')}
        >
          중고거래
        </HeaderMenu>
        <HeaderMenu isSelected={selectedHeader === '/barter'} onClick={() => moveToPage('/barter')}>
          공동구매
        </HeaderMenu>
        <HeaderMenu
          isSelected={selectedHeader === '/cobuying'}
          onClick={() => moveToPage('/cobuying')}
        >
          물물교환
        </HeaderMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
