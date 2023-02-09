import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { currentUserState } from 'Recoils';

import { HeaderButtonBlock, Button, CircleAvatar, UserMenu, UserMenuItem } from './HeaderStyle';

const HeaderButtons = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  /* 임시 로그인, 로그아웃 기능 */
  const signIn = () => setCurrentUser(true);
  const signOut = () => {
    setIsOpenMenu(false);
    setCurrentUser(false);
  };
  //

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
          <Button onClick={signIn}>로그인</Button>
          <Button className="last_item">회원가입</Button>
        </>
      )}
    </HeaderButtonBlock>
  );
};

export default HeaderButtons;
