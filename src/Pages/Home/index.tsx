import React from 'react';

import Card from 'Components/Card/Card';
import Layout from 'Components/Common/Layout/Layout';
import { HomeArticle, HomeSection, HomeSectionTitle } from './HomStyle';

const Home = () => {
  return (
    <Layout>
      <HomeArticle>
        <HomeSection className="home_cobuying_section">
          <HomeSectionTitle>🫵 너만 오면 Go! </HomeSectionTitle>
          <Card totalPartyNumber={100} participationNumber={98} imgUrl="img1.jpg" />
          <Card totalPartyNumber={100} participationNumber={80} imgUrl="img2.jpg" />
          <Card totalPartyNumber={100} participationNumber={97} imgUrl="img3.jpg" />
          <Card totalPartyNumber={100} participationNumber={100} imgUrl="img1.jpg" />
        </HomeSection>
      </HomeArticle>
    </Layout>
  );
};

export default Home;
