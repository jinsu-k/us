import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const CarouselSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;
