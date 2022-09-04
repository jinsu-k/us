import React from 'react';

import Layout from 'Components/Common/Layout/Layout';
import Carousel from 'Components/Common/Carousel/Carousel';
import { HomeArticle, HomeSection, HomeSectionTitle } from './HomStyle';

// Slider 구현을 위한 임시 변수 및 타입
export type ImageUrlListType = {
  imgUrl: string;
  totalPartyNumber: number;
  participationNumber: number;
};

const IMAGE_URL_LIST: ImageUrlListType[] = [
  { imgUrl: 'img1.jpg', totalPartyNumber: 100, participationNumber: 99 },
  { imgUrl: 'img2.jpg', totalPartyNumber: 100, participationNumber: 98 },
  { imgUrl: 'img3.jpg', totalPartyNumber: 100, participationNumber: 97 },
  { imgUrl: 'img2.jpg', totalPartyNumber: 100, participationNumber: 96 },
  { imgUrl: 'img3.jpg', totalPartyNumber: 100, participationNumber: 95 },
  { imgUrl: 'img1.jpg', totalPartyNumber: 100, participationNumber: 94 },
  { imgUrl: 'img3.jpg', totalPartyNumber: 100, participationNumber: 93 },
  { imgUrl: 'img3.jpg', totalPartyNumber: 100, participationNumber: 92 },
  { imgUrl: 'img2.jpg', totalPartyNumber: 100, participationNumber: 91 },
  { imgUrl: 'img1.jpg', totalPartyNumber: 100, participationNumber: 90 },
];
//

const Home = () => {
  return (
    <Layout>
      <HomeArticle>
        <HomeSection className="home_cobuying_section">
          <HomeSectionTitle>🫵 너만 오면 Go! </HomeSectionTitle>
          <Carousel data={IMAGE_URL_LIST} />
        </HomeSection>
      </HomeArticle>
    </Layout>
  );
};

export default Home;
