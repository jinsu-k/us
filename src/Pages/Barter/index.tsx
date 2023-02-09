import { BARTER_USEDTRADE_CONTENTS_LIST } from 'Utils';

import Card from 'Components/Card/Card';
import Layout from 'Common/Layout/Layout';
import {
  CategoryArticle,
  CategoryContentsBlock,
  CategorySearchBar,
  CategorySection,
  CategoryTitle,
  CategoryTopBlock,
} from 'Components/Category/CategoryStyle';

/**
 * 물물교환 페이지
 */
export default function Barter() {
  return (
    <Layout>
      <CategoryArticle>
        <CategorySection>
          <CategoryTopBlock>
            <CategoryTitle>물물교환</CategoryTitle>
            <CategorySearchBar />
          </CategoryTopBlock>
          <CategoryContentsBlock>
            {BARTER_USEDTRADE_CONTENTS_LIST.map((item, index) => (
              <Card
                key={`usedtrade_${item.thumbImage}_${index}`}
                cardType="Barter"
                cardContents={item}
              />
            ))}
          </CategoryContentsBlock>
        </CategorySection>
      </CategoryArticle>
    </Layout>
  );
}
