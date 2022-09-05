import { CardContainer, CardImage, CardImageBlock, CardInner, CardWrapper } from './CardStyle';

type CardProps = {
  children: React.ReactNode;
  type: string;
  imgUrl: string;
};

const Card = ({ children, type, imgUrl }: CardProps) => {
  return (
    <CardContainer type={type}>
      <CardWrapper>
        <CardInner>
          <CardImageBlock>
            <CardImage src={require(`../../Asset/Images/${imgUrl}`)} alt="" />
          </CardImageBlock>
          {children}
        </CardInner>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
