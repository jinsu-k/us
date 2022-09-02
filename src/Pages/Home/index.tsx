import React from 'react';

import CardComponent from 'Components/Card/CardComponent';
import { HomeArticle, HomeSection, HomeSectionTitle } from './HomStyle';
import Layout from 'Components/Common/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HomeArticle>
        <HomeSection className="home_cobuying_section">
          <HomeSectionTitle>🫵 너만 오면 Go! </HomeSectionTitle>
          <CardComponent totalPartyNumber={100} participationNumber={98} imgUrl="img1.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={80} imgUrl="img2.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={97} imgUrl="img3.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={89} imgUrl="img1.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={70} imgUrl="img2.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={80} imgUrl="img3.jpg" />
        </HomeSection>
      </HomeArticle>
    </Layout>
  );
};

export default Home;
