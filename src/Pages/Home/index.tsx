import React from 'react';

import Layout from 'Components/Common/Layout/Layout';
import { HomeArticle, HomeSection } from './HomStyle';

const Home = () => {
  return (
    <HomeArticle>
      <HomeSection className="home_usedtrade_section">중고거래</HomeSection>
      <HomeSection className="home_barter_section">물물교환</HomeSection>
      <HomeSection className="home_cobuying_section">공동구매</HomeSection>
    </HomeArticle>
  );
};

export default Home;
