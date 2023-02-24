import { DefaultTheme } from 'styled-components';

const colors = {
  UsPointColor: '#84e0cd',
  gray: '#e9ecef',
  gray2: '#808080',
  gainsboro: '#dcdcdc',
  lightGray: '#d3d3d3',
  ultraLightGray: '#f9f9f9',
  silver: '#c0c0c0',
  darkGray: '#a9a9a9',
  white: '#ffffff',
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
