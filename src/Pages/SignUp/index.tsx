import { useState } from 'react';

import useNavigator from 'Hooks/useNavigator';

import Layout from 'Common/Layout/Layout';

import {
  EmailVerificationButton,
  SignUpButton,
  SignUpContainer,
  SignUpFormBlock,
  SignUpFormLabel,
  SignUpFormSubLabel,
  SignUpInput,
  SignUpInputBlock,
  SignUpOptionBlock,
  SignUpOptionText,
  SignUpTitle,
  SignUpWrapper,
} from './SignUp.style';

/**
 * 회원가입 페이지
 */
export default function SignUp() {
  const navigator = useNavigator();

  // 임시 이메일 인증 버튼 활성화 state
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');

  return (
    <Layout>
      <SignUpContainer>
        <SignUpWrapper>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpFormBlock>
            <SignUpInputBlock>
              <SignUpFormLabel>이메일</SignUpFormLabel>
              <SignUpFormSubLabel>이메일 형식에 맞게 입력해 주세요. </SignUpFormSubLabel>
              <SignUpInput
                placeholder={`이메일 ex) us@example.com`}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <EmailVerificationButton active={isActive}>이메일 인증하기</EmailVerificationButton>
            </SignUpInputBlock>
            <SignUpInputBlock>
              <SignUpFormLabel>비밀번호</SignUpFormLabel>
              <SignUpFormSubLabel>
                영문, 숫자, 특수문자를 포함한 8자리 이상의 비밀번호를 입력해주세요.
              </SignUpFormSubLabel>
              <SignUpInput
                placeholder={`비밀번호`}
                type={'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </SignUpInputBlock>
            <SignUpInputBlock>
              <SignUpFormLabel>비밀번호 확인</SignUpFormLabel>
              <SignUpInput
                placeholder={`비밀번호 확인`}
                type={'password'}
                value={passwordCheck}
                onChange={e => setPasswordCheck(e.target.value)}
              />
            </SignUpInputBlock>
            <SignUpInputBlock>
              <SignUpFormLabel>닉네임</SignUpFormLabel>
              <SignUpFormSubLabel>
                다른 유저와 겹치지 않도록 입력해주세요. ( 2 ~ 15자 )
              </SignUpFormSubLabel>
              <SignUpInput
                placeholder={`닉네임 ( 2 ~ 15자 )`}
                value={nickname}
                onChange={e => setNickname(e.target.value)}
              />
            </SignUpInputBlock>
          </SignUpFormBlock>
          <SignUpButton>회원가입</SignUpButton>
          <SignUpOptionBlock>
            <SignUpOptionText>이미 회원이신가요?</SignUpOptionText>
            <SignUpOptionText highlight onClick={() => navigator('/signin')}>
              로그인
            </SignUpOptionText>
          </SignUpOptionBlock>
        </SignUpWrapper>
      </SignUpContainer>
    </Layout>
  );
}
