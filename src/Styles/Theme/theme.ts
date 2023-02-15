import { DefaultTheme } from 'styled-components';

const colors = {
  UsPointColor: '#84e0cd',
};

const fontFamily = {
  normal: 'NanumBarunGothic',
  bold: 'NanumBarunGothicBold',
  light: 'NanumBarunGothicLight',
  thin: 'NanumBarunGothicUltraLight',
};

export type UsColorsType = typeof colors;
export type UsFontFamily = typeof fontFamily;

export const usTheme: DefaultTheme = {
  colors,
  fontFamily,
};
