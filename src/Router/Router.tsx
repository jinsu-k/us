import { Routes, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import Barter from 'Pages/Barter';
import MyPage from 'Pages/MyPage';
import SignIn from 'Pages/SignIn';
import SignUp from 'Pages/SignUp';
import CoBuying from 'Pages/CoBuying';
import UsedTrade from 'Pages/UsedTrade';

/**
 * 라우터 정보 모음
 */
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/barter" element={<Barter />}></Route>
      <Route path="/cobuying" element={<CoBuying />}></Route>
      <Route path="/usedtrade" element={<UsedTrade />}></Route>
    </Routes>
  );
}
