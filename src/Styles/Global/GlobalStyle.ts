import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
  }

  body {
    height: 100vh;
  }

  #root {
    height: 100%;
  }

  #us_main_wrapper {
    height: auto;
    min-height: 100%;
    padding-bottom: 60px;
  }
`;
