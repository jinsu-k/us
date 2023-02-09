import { useLocation } from 'react-router-dom';

import { HeaderMenuBlock, Menu } from './HeaderStyle';

type Props = {
  moveToPage: (url: string) => void;
};

const HeaderMenu = ({ moveToPage }: Props) => {
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
};

export default HeaderMenu;
