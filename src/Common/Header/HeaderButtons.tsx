import useNavigator from 'Hooks/useNavigator';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { currentUserState } from 'Recoils';

import { HeaderButtonBlock, Button, CircleAvatar, UserMenu, UserMenuItem } from './HeaderStyle';

/**
 * Header 오른쪽 로그인/회원가입 버튼 Or UserAvartar 버튼 컴포넌트
 */
export default function HeaderButtons() {
  const navigator = useNavigator();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  // 임시 로그아웃 기능
  const signOut = () => {
    setIsOpenMenu(false);
    setCurrentUser(false);
  };

  const openMenuHandler = () => setIsOpenMenu(!isOpenMenu);

  return (
    <HeaderButtonBlock>
      {currentUser ? (
        <>
          <CircleAvatar onClick={openMenuHandler} />
          <UserMenu isOpenMenu={isOpenMenu}>
            <UserMenuItem onClick={signOut}>로그아웃</UserMenuItem>
          </UserMenu>
        </>
      ) : (
        <>
          <Button onClick={() => navigator('/signin')}>로그인</Button>
          <Button className="last_item" onClick={() => navigator('/signup')}>
            회원가입
          </Button>
        </>
      )}
    </HeaderButtonBlock>
  );
}
