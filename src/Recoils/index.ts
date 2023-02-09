import { atom } from 'recoil';

// 임시 로그인, 로그아웃 기능을 위한 state
export const currentUserState = atom({
  key: 'currentUserState',
  default: false,
});
