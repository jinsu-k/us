import React from 'react';

import { LayoutContainer } from './CommonStyle';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
