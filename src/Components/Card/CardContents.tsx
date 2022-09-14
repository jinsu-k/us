import CircleProgressBar from 'Components/ProgressBar/CircleProgressBar';
import { CoBuyingType } from 'types';
import {
  CardContentsWrapper,
  CardLabel,
  CardTitle,
  ProductInfoBlock,
  ProductLabel,
  ProductPrice,
  ProgressBarBlock,
} from './CardStyle';

type CardContentsProps = {
  title: string;
  price: number;
  cobuying?: CoBuyingType;
};

const CardContents = ({ title, price, cobuying }: CardContentsProps) => {
  return (
    <CardContentsWrapper>
      {cobuying && (
        <>
          <ProgressBarBlock>
            <CircleProgressBar
              percent={Math.floor((cobuying.participationNumber / cobuying.minNumber) * 100)}
            />
          </ProgressBarBlock>
          <CardLabel>
            빈 자리 ({cobuying.participationNumber}/{cobuying.minNumber})
          </CardLabel>
        </>
      )}
      <CardTitle>{title}</CardTitle>
      <ProductInfoBlock>
        {cobuying && (
          <>
            <ProductLabel className="product_label_left">[{cobuying.salesUnit}당]</ProductLabel>
            <ProductLabel className="product_label_right">{cobuying.salePeriod} 까지</ProductLabel>
          </>
        )}
        <ProductPrice>{price} 원</ProductPrice>
      </ProductInfoBlock>
    </CardContentsWrapper>
  );
};

export default CardContents;
