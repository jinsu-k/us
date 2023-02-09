import { useLocation } from 'react-router-dom';

import { HeaderMenuBlock, Menu } from './HeaderStyle';

type Props = {
  moveToPage: (url: string) => void;
};

/**
 * Header 네비게이션 버튼 컴포넌트
 * @param moveToPage 페이지 이동 함수
 */
export default function HeaderMenu({ moveToPage }: Props) {
  const { pathname } = useLocation();

  return (
    <HeaderMenuBlock>
      <Menu isSelected={pathname === '/cobuying'} onClick={() => moveToPage('/cobuying')}>
        공동구매
      </Menu>
      <Menu isSelected={pathname === '/usedtrade'} onClick={() => moveToPage('/usedtrade')}>
        중고거래
      </Menu>
      <Menu isSelected={pathname === '/barter'} onClick={() => moveToPage('/barter')}>
        물물교환
      </Menu>
    </HeaderMenuBlock>
  );
}
