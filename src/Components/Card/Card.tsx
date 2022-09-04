import CircleProgressBar from 'Components/ProgressBar/CircleProgressBar';
import {
  CardContainer,
  CardImage,
  CardImageBlock,
  CardInner,
  CardLabel,
  CardTitle,
  CardWrapper,
  ProductInfoBlock,
  ProductLabel,
  ProductPrice,
  ProgressBarBlock,
} from './CardStyle';

type CardProps = {
  imgUrl: string;
  totalPartyNumber: number;
  participationNumber: number;
};

const Card = ({ imgUrl, totalPartyNumber, participationNumber }: CardProps) => {
  return (
    <CardContainer>
      <CardWrapper>
        <CardInner>
          <CardImageBlock>
            <CardImage src={require(`../../Asset/Images/${imgUrl}`)} alt="" />
          </CardImageBlock>
          <ProgressBarBlock>
            <CircleProgressBar
              percent={Math.floor((participationNumber / totalPartyNumber) * 100)}
            />
          </ProgressBarBlock>
          <CardLabel>
            빈 자리 ({participationNumber}/{totalPartyNumber})
          </CardLabel>
          <CardTitle>제목제목제목제제목제목제제목목</CardTitle>
          <ProductInfoBlock>
            <ProductLabel className="product_label_left">[kg당]</ProductLabel>
            <ProductLabel className="product_label_right">2022.09.20 까지</ProductLabel>
            <ProductPrice>5,000 원</ProductPrice>
          </ProductInfoBlock>
        </CardInner>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
