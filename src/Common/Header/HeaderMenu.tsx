import useNavigator from 'Hooks/useNavigator';
import { useLocation } from 'react-router-dom';

import { HeaderMenuBlock, Menu } from './HeaderStyle';

/**
 * Header 네비게이션 버튼 컴포넌트
 */
export default function HeaderMenu() {
  const { pathname } = useLocation();
  const navigator = useNavigator();

  return (
    <HeaderMenuBlock>
      <Menu isSelected={pathname === '/cobuying'} onClick={() => navigator('/cobuying')}>
        공동구매
      </Menu>
      <Menu isSelected={pathname === '/usedtrade'} onClick={() => navigator('/usedtrade')}>
        중고거래
      </Menu>
      <Menu isSelected={pathname === '/barter'} onClick={() => navigator('/barter')}>
        물물교환
      </Menu>
    </HeaderMenuBlock>
  );
}
