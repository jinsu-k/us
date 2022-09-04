import styled from 'styled-components';

export const CardContainer = styled.article`
  position: relative;
  width: 23%;
  height: 400px;
  padding: 10px 5px 20px 0;
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
  height: 60%;
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
  font-family: 'NanumBarunGothic';
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
  height: 10%;
  padding-top: 10%;
  padding-left: 7%;
`;

export const ProductInfoBlock = styled.div`
  padding-left: 7%;
  padding-right: 7%;

  .product_label_right {
    padding-left: 42%;
  }
`;

export const ProductLabel = styled.label`
  font-size: 12px;
  font-family: 'NanumBarunGothic';
`;

export const ProductPrice = styled.div`
  font-size: 20px;
  font-family: 'NanumBarunGothicBold';
  padding-top: 10%;
`;

export const ProgressBarBlock = styled.div`
  position: absolute;
  top: 195px;
  right: 7%;
  width: 50px;
  height: 50px;
`;

export const CardLabel = styled.div`
  font-size: 12px;
  font-family: 'NanumBarunGothic';
  padding-left: 7%;
`;
