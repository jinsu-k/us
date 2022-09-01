import React from 'react';

import CardComponent from 'Components/Card/CardComponent';
import { HomeArticle, HomeSection, HomeSectionTitle } from './HomStyle';
import Layout from 'Components/Common/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <HomeArticle>
        <HomeSection className="home_cobuying_section">
          <HomeSectionTitle>우리 공구</HomeSectionTitle>
          <CardComponent totalPartyNumber={100} participationNumber={0} imgUrl="img1.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={10} imgUrl="img2.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={20} imgUrl="img3.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={30} imgUrl="img1.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={40} imgUrl="img2.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={50} imgUrl="img3.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={60} imgUrl="img1.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={70} imgUrl="img2.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={80} imgUrl="img3.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={90} imgUrl="img1.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={100} imgUrl="img2.jpg" />
          <CardComponent totalPartyNumber={100} participationNumber={100} imgUrl="img2.jpg" />
        </HomeSection>
      </HomeArticle>
    </Layout>
  );
};

export default Home;
