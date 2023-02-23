import Layout from 'Common/Layout/Layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from 'Recoils';
import {
  SiginInButton,
  SiginInInput,
  SiginInInputBlock,
  SiginInTitle,
  SignInContainer,
  SignInOptionBlock,
  SignInWrapper,
  SingInOptionText,
} from './SignIn.style';

/**
 * 로그인 페이지
 */
export default function SignIn() {
  const navigator = useNavigate();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 임시 로그인 기능
  const signIn = () => {
    setCurrentUser(true);
    navigator('/');
  };

  return (
    <Layout>
      <SignInContainer>
        <SignInWrapper>
          <SiginInTitle>로그인</SiginInTitle>
          <SiginInInputBlock>
            <SiginInInput
              placeholder={'이메일'}
              type={'EMAIL'}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <SiginInInput
              placeholder={'비밀번호'}
              type={'PASSWORD'}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </SiginInInputBlock>
          <SiginInButton onClick={signIn}>로그인</SiginInButton>
          <SignInOptionBlock>
            <SingInOptionText>회원가입</SingInOptionText>
            <SingInOptionText>아이디찾기</SingInOptionText>
            <SingInOptionText>비밀번호찾기</SingInOptionText>
          </SignInOptionBlock>
        </SignInWrapper>
      </SignInContainer>
    </Layout>
  );
}
