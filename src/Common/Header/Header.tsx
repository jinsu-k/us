import HeaderMenu from './HeaderMenu';
import HeaderButtons from './HeaderButtons';

import { HeaderContainer, HeaderWrapper } from './HeaderStyle';
import { ReactComponent as UsLogo } from '../Asset/Images/US_LOGO.svg';
import useNavigator from 'Hooks/useNavigator';

/**
 * US Header 컴포넌트
 */
export default function Header() {
  const navigator = useNavigator();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <UsLogo
          onClick={() => navigator('/')}
          style={{ paddingTop: '5px', paddingRight: '30px', cursor: 'pointer' }}
        />
        <HeaderMenu />
        <HeaderButtons />
      </HeaderWrapper>
    </HeaderContainer>
  );
}
