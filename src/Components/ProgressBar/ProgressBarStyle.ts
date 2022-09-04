import styled from 'styled-components';

type CircleProgressProps = {
  dashArray: number;
  dashOffSet: number;
};

export const CircleProgressBarContainer = styled.svg`
  transform: rotate(-90deg);
`;

const EmptyCircle = styled.circle`
  fill: none;
`;
export const CircleProgressFrame = styled(EmptyCircle)`
  stroke: #fff;
  stroke-width: 5;
`;

export const CircleProgressBarInFrame = styled(EmptyCircle)<CircleProgressProps>`
  stroke: ${props => props.theme.colors.UsPointColor};
  stroke-width: 5;
  animation: circle_charging 0.5s linear;
  stroke-dasharray: ${props => props.dashArray};
  stroke-dashoffset: ${props => props.dashOffSet};

  @keyframes circle_charging {
    0% {
      stroke-dashoffset: ${props => props.dashArray};
    }
    60% {
      stroke-dashoffset: ${props => props.dashArray / 2};
    }
  }
`;

export const CircleProgressValue = styled.p`
  position: absolute;
  top: -1px;
  right: 10%;
  font-size: 12px;
  text-align: center;
  color: #000;
  line-height: 80px;
`;
