import styled from 'styled-components';

type CardProgressBarProps = {
  percent: number;
};

export const CardContainer = styled.article`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1 1 0;
  padding: 10px 23px 20px 23px;
  margin-top: 10px;
  margin-right: 1%;
  border-radius: 8px;
  border: 0.1px solid #a9a9a9;
  box-shadow: 10px 10px 5px #a9a9a9;
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const CardImage = styled.img`
  display: inline-block;
  content: '';
  width: 250px;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-family: 'NanumBarunGothic';
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
  padding: 5px 0 5px 10px;
`;

export const CardLabel = styled.label`
  font-size: 12px;
  font-family: 'NanumBarunGothicBold';
  padding: 3px 3px 10px 10px;
`;

export const CardProgressBarWrapper = styled.div`
  padding: 20px 0 10px 0;
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

  @keyframes floating {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -2px);
    }
  }
`;
