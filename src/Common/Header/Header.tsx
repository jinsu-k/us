import { useNavigate } from 'react-router-dom';

import HeaderMenu from './HeaderMenu';
import HeaderButtons from './HeaderButtons';

import { HeaderContainer, HeaderWrapper } from './HeaderStyle';
import { ReactComponent as UsLogo } from '../Asset/Images/US_LOGO.svg';

/**
 * US Header 컴포넌트
 */
export default function Header() {
  const navigate = useNavigate();

  const moveToPage = (url: string) => navigate(url);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <UsLogo
          onClick={() => moveToPage('/')}
          style={{ paddingTop: '5px', paddingRight: '30px', cursor: 'pointer' }}
        />
        <HeaderMenu moveToPage={moveToPage} />
        <HeaderButtons />
      </HeaderWrapper>
    </HeaderContainer>
  );
}
