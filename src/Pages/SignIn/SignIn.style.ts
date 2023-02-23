import styled from 'styled-components';

type InputProps = {
  type: 'EMAIL' | 'PASSWORD';
};

export const SignInContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  padding-top: 20%;
`;

export const SignInWrapper = styled.div`
  width: 30%;
`;

export const SiginInTitle = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.gray2};

  font-family: ${props => props.theme.fontFamily.bold};
`;

export const SiginInInputBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 14px;
`;

export const SiginInInput = styled.input<InputProps>`
  padding: 13px 15px 14px;
  outline: none;
  border-radius: ${props =>
    props.type === 'EMAIL' ? '4px 4px 0 0' : props.type === 'PASSWORD' ? '0 0 4px 4px' : ''};
  border: 1px solid ${props => props.theme.colors.UsPointColor};
  border-top: ${props => props.type === 'PASSWORD' && 'none'};
`;

export const SiginInButton = styled.button`
  width: 100%;
  height: 46px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.UsPointColor};

  border: none;
  border-radius: 6px;

  font-family: ${props => props.theme.fontFamily.bold};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const SignInOptionBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SingInOptionText = styled.p`
  font-size: 12px;
  font-family: ${props => props.theme.fontFamily.normal};
  color: ${props => props.theme.colors.gray2};

  &:hover {
    cursor: pointer;
  }
`;
