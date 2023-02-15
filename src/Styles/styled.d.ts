import 'styled-components';
import { UsColorsType, UsFontFamily } from './Theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: UsColorsType;
    fontFamily: UsFontFamily;
  }
}
