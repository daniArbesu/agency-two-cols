import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      primary: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
    breakpoints: {
      phone: string;
      tablet: string;
      desktop: string;
      LgDesktop: string;
    };
  }
}
