// 공동구매 페이지
import React from 'react';

import Card from 'Components/Card/Card';
import Layout from 'Components/Common/Layout/Layout';
import {
  CategoryArticle,
  CategoryContentsBlock,
  CategorySearchBar,
  CategorySection,
  CategoryTitle,
  CategoryTopBlock,
} from 'Components/Category/CategoryStyle';

// Category 구현 위한 임시 변수 및 타입
const IMAGE_URL_LIST: string[] = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img3.jpg',
];
//

const CoBuying = () => {
  return (
    <Layout>
      <CategoryArticle>
        <CategorySection>
          <CategoryTopBlock>
            <CategoryTitle>공동구매</CategoryTitle>
            <CategorySearchBar />
          </CategoryTopBlock>
          <CategoryContentsBlock>
            {IMAGE_URL_LIST.map((imgUrl, index) => (
              <Card key={`usedtrade_${imgUrl}_${index}`} type="Usedtrade" imgUrl={imgUrl}>
                공동구매
              </Card>
            ))}
          </CategoryContentsBlock>
        </CategorySection>
      </CategoryArticle>
    </Layout>
  );
};

export default CoBuying;
