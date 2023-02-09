import { CardImageWrapper, Image } from './CardStyle';

type CardImageProps = {
  thumbImage: string;
};

/**
 * 카드 View에 표시될 이미지 컴포넌트
 * @param thumbImage
 */
export default function CardThumbImage({ thumbImage }: CardImageProps) {
  return (
    <CardImageWrapper>
      <Image src={require(`../../Common/Asset/Images/${thumbImage}`)} alt="" />
    </CardImageWrapper>
  );
}
