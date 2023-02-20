import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CarouselContainer, CarouselSlider } from './CarouselStyle';
import { Settings } from 'react-slick';

type CarouselProps = {
  children: React.ReactNode;
  customSettings?: Settings;
};

/**
 * 공통 Carousel 컴포넌트
 * @param children
 * @param customSettings - react-slick 커스텀 settings,
 * @returns
 */
export default function Carousel({ children, customSettings }: CarouselProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const newSettings = { ...settings, ...customSettings };

  return (
    <CarouselContainer>
      <CarouselSlider {...newSettings}>{children}</CarouselSlider>
    </CarouselContainer>
  );
}
