import useNavigator from 'Hooks/useNavigator';
import { CardContentsType } from 'types';

import CardContents from './CardContents';
import CardThumbImage from './CardImage';
import { CardContainer, CardInner, CardWrapper } from './CardStyle';

type CardProps = {
  cardType: string;
  cardContents: CardContentsType;
};

/**
 * 상품 정보를 나타내는 Card View 컴포넌트
 * @param cardType 카드의 타입 | ex) Home, UsedTrade ...
 * @param cardContents 카드 내부에 표시할 콘텐츠 Object
 */
export default function Card({ cardType, cardContents }: CardProps) {
  const { thumbImage, ...contents } = cardContents;

  const navigator = useNavigator();

  return (
    <CardContainer type={cardType} onClick={() => navigator(`/detail/${cardContents.id}`)}>
      <CardWrapper>
        <CardInner>
          <CardThumbImage thumbImage={thumbImage} />
          <CardContents {...contents} />
        </CardInner>
      </CardWrapper>
    </CardContainer>
  );
}
