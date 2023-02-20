import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { usTheme } from 'Styles/Theme/theme';
import { GlobalStyle } from 'Styles/Global/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <RecoilRoot>
      <ThemeProvider theme={usTheme}>
        <GlobalStyle />
        <Story {...context} />
      </ThemeProvider>
    </RecoilRoot>
  ),
];
