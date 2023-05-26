import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  html,
  body {
    color: ${({ theme }) => theme.color.primary};
    min-height: 100%;
    font-family: 'Roboto', sans-serif;
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
