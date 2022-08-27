import { atom } from 'recoil';

// Header의 중고거래, 공동구래, 물물교환 text button이 클릭되어 해당 페이지로 이동했을 때
// 선택된 text button 색상을 변경할 client state
export const selectedHeaderState = atom({
  key: 'selectedHeaderState',
  default: '',
});
