import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CarouselContainer, CarouselSlider } from './CarouselStyle';

type CarouselProps = {
  children: React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <CarouselContainer>
      <CarouselSlider {...settings}>{children}</CarouselSlider>
    </CarouselContainer>
  );
}
