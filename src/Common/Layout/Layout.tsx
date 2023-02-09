import { PropsWithChildren } from 'react';

import { LayoutContainer } from './CommonStyle';

/**
 * 공통 레이아웃 컴포넌트
 * @param children React Node Chilren
 */
export default function Layout({ children }: PropsWithChildren) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
