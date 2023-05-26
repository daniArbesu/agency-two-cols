import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.color.primary};
    min-height: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,li{
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
