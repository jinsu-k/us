import styled from 'styled-components';

type EmailVerificationButtonProps = {
  active: boolean;
};

type SignUpOptionTextProps = {
  highlight?: boolean;
};

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  padding-top: 5%;
`;

export const SignUpWrapper = styled.div`
  width: 30%;
`;

export const SignUpTitle = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.bold};
`;

export const SignUpFormBlock = styled.form`
  width: 100%;
`;

export const SignUpFormLabel = styled.label`
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily.bold};

  margin-bottom: 12px;
`;

export const SignUpFormSubLabel = styled.label`
  font-size: 12px;
  font-family: ${props => props.theme.fontFamily.normal};
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 12px;
`;

export const SignUpInputBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin-bottom: 20px;
`;

export const SignUpInput = styled.input`
  padding: 13px 15px 14px;
  outline: none;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.lightGray};
`;

export const EmailVerificationButton = styled.button<EmailVerificationButtonProps>`
  outline: none;

  color: ${props =>
    props.active ? props.theme.colors.UsPointColor : props.theme.colors.lightGray};
  background-color: ${props => props.theme.colors.ultraLightGray};

  font-family: ${props => props.theme.fontFamily.bold};
  border: 1px solid
    ${props => (props.active ? props.theme.colors.UsPointColor : props.theme.colors.lightGray)};
  border-radius: 6px;
  padding: 16px;
  margin-top: 12px;

  &:hover {
    cursor: ${props => props.active && 'pointer'};
    opacity: ${props => props.active && '0.7'};
  }
  &:active {
    cursor: ${props => props.active && 'pointer'};
    opacity: ${props => props.active && '0.5'};
  }
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 46px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.UsPointColor};

  border: none;
  border-radius: 6px;

  font-family: ${props => props.theme.fontFamily.bold};
  margin-bottom: 12px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const SignUpOptionBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const SignUpOptionText = styled.p<SignUpOptionTextProps>`
  font-size: 12px;
  font-family: ${props =>
    props.highlight ? props.theme.fontFamily.bold : props.theme.fontFamily.light};

  text-decoration: ${props => props.highlight && 'underline'};

  margin-left: ${props => props.highlight && '8px'};
  &:hover {
    cursor: ${props => props.highlight && 'pointer'};
  }
`;
