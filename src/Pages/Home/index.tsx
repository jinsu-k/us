import { COBUYING_CONTENTS_LIST } from 'Utils';

import Card from 'Components/Card/Card';
import Layout from 'Common/Layout/Layout';
import Carousel from 'Common/Carousel/Carousel';
import { HomeArticle, HomeSection, HomeSectionTitle } from './HomStyle';

/**
 * US 메인 홈 페이지
 */
export default function Home() {
  return (
    <Layout>
      <HomeArticle>
        <HomeSection className="home_cobuying_section">
          <HomeSectionTitle>🫵 너만 오면 Go! </HomeSectionTitle>
          <Carousel>
            {COBUYING_CONTENTS_LIST.map((contents, index) => {
              return (
                <Card key={`card_carousel_${index}`} cardType={'home'} cardContents={contents} />
              );
            })}
          </Carousel>
        </HomeSection>
      </HomeArticle>
    </Layout>
  );
}
