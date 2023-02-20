import styled from 'styled-components';

type CircleProps = {
  w: number;
  h: number;
};

export const AvatarWithTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.div<CircleProps>`
  width: ${props => props.w};
  height: ${props => props.h};
  border-radius: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily.bold};
  margin-left: 8px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
