import 'styled-components';
import { UsColorsType } from './Theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: UsColorsType;
  }
}
