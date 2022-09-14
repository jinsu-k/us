import { CardImageWrapper, Image } from './CardStyle';

type CardImageProps = {
  thumbImage: string;
};

const CardThumbImage = ({ thumbImage }: CardImageProps) => {
  return (
    <CardImageWrapper>
      <Image src={require(`../../Common/Asset/Images/${thumbImage}`)} alt="" />
    </CardImageWrapper>
  );
};

export default CardThumbImage;
