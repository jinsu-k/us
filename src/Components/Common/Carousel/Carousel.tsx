import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from 'Components/Card/Card';
import { ImageUrlListType } from 'Pages/Home';
import { CarouselContainer, CarouselSlider } from './CarouselStyle';
import {
  CardLabel,
  CardTitle,
  ProductInfoBlock,
  ProductLabel,
  ProductPrice,
  ProgressBarBlock,
} from 'Components/Card/CardStyle';
import CircleProgressBar from 'Components/ProgressBar/CircleProgressBar';

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
            <Card key={`item_${index}`} type="Home" imgUrl={item.imgUrl}>
              <ProgressBarBlock>
                <CircleProgressBar
                  percent={Math.floor((item.participationNumber / item.totalPartyNumber) * 100)}
                />
              </ProgressBarBlock>
              <CardLabel>
                빈 자리 ({item.participationNumber}/{item.totalPartyNumber})
              </CardLabel>
              <CardTitle>제목제목제목제제목제목제제목목</CardTitle>
              <ProductInfoBlock>
                <ProductLabel className="product_label_left">[kg당]</ProductLabel>
                <ProductLabel className="product_label_right">2022.09.20 까지</ProductLabel>
                <ProductPrice>5,000 원</ProductPrice>
              </ProductInfoBlock>
            </Card>
          );
        })}
      </CarouselSlider>
    </CarouselContainer>
  );
};

export default Carousel;
