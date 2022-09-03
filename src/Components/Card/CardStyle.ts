import styled from 'styled-components';

type CardProgressBarProps = {
  percent: number;
};

export const CardContainer = styled.article`
  position: relative;
  width: 20%;
  height: 350px;
  padding: 10px 5px 20px 5px;
  margin-top: 10px;
  margin-bottom: 2%;

  &:hover {
    animation: card_floating 0.5s infinite alternate;
  }

  @keyframes card_floating {
    0% {
      transform: perspective(300px) scale(1.1) translateZ(0px);
    }
    100% {
      transform: perspective(300px) scale(1.1) translateZ(3px);
    }
  }
`;

const CardBorder = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardWrapper = styled(CardBorder)`
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 20px #a9a9a9;
  perspective: 150px;
`;

export const CardInner = styled(CardBorder)`
  width: 98%;
  height: 100%;
  background-color: #fff;
`;

export const CardImageBlock = styled(CardBorder)`
  width: 102%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardImage = styled.img`
  content: '';
  width: 100%;
  height: 210px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-family: 'NanumBarunGothicBold';
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
  height: 10%;
  padding-top: 5%;
  padding-left: 7%;
`;

export const CardLabel = styled.div`
  font-size: 12px;
  font-family: 'NanumBarunGothic';
  padding-top: 2%;
  padding-left: 7%;
`;

export const CardProgressBarBlock = styled.div`
  width: 90%;
  height: 10%;
  padding-top: 7%;
  padding-left: 7%;
`;

export const CardProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #dcdcdc;
  margin-top: 10px;
  box-shadow: inset 0px 1px 1px #f8f8f8, 0px 1px #fff;
  border-radius: 8px;
`;

export const CardProgressBarGauge = styled.span<CardProgressBarProps>`
  position: absolute;
  width: ${props => (props.percent ? `${props.percent}` : 0)}%;
  height: 100%;
  background-color: #84e0cb;
  border-radius: 8px;
  animation: charging 1s ease-out;

  ::before {
    content: '';
    right: ${props => (props.percent === 0 ? '-25px' : '-16px')};
    top: -31px;
    position: absolute;
    border-radius: 3px;
    border-top: 30px solid #ff6347;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 10px transparent;
    animation: floating 0.5s infinite alternate;
  }

  ::after {
    position: absolute;
    height: 20px;
    content: ${props => `"${props.percent ? props.percent : '0'}%"`};
    right: ${props => (props.percent === 0 ? '-25px' : props.percent === 100 ? '-20px' : '-16px')};
    top: -31px;
    color: #fff;
    background-color: #ff6347;
    font-size: 12px;
    font-family: 'NanumBarunGothicBold';
    line-height: 23px;
    padding: 1px 8px 1px ${props => (props.percent === 0 ? '14px' : '8px')};
    border-radius: 3px;
    animation: floating 0.5s infinite alternate;
  }

  @keyframes charging {
    from {
      width: 0;
    }
    to {
      width: ${props => props.percent};
    }
  }

  @keyframes floating {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -2px);
    }
  }
`;
