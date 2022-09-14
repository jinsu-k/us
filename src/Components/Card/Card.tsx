import { CardContentsType } from 'types';

import CardContents from './CardContents';
import CardThumbImage from './CardImage';
import { CardContainer, CardInner, CardWrapper } from './CardStyle';

type CardProps = {
  cardType: string;
  cardContents: CardContentsType;
};

const Card = ({ cardType, cardContents }: CardProps) => {
  const { thumbImage, ...contents } = cardContents;

  return (
    <CardContainer type={cardType}>
      <CardWrapper>
        <CardInner>
          <CardThumbImage thumbImage={thumbImage} />
          <CardContents {...contents} />
        </CardInner>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
