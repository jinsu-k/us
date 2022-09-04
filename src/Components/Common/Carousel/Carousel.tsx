import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from 'Components/Card/Card';
import { ImageUrlListType } from 'Pages/Home';
import { CarouselContainer, CarouselSlider } from './CarouselStyle';

type CarouselProps = {
  // 임시로 slider를 구현하기 위해 사용한 변수 추후에 변경 예정
  data: ImageUrlListType[];
};

const Carousel = ({ data }: CarouselProps) => {
  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <CarouselContainer>
      <CarouselSlider {...settings}>
        {data.map((item, index) => {
          return (
            <Card
              key={`item_${index}`}
              totalPartyNumber={item.totalPartyNumber}
              participationNumber={item.participationNumber}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </CarouselSlider>
    </CarouselContainer>
  );
};

export default Carousel;
