import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalstyles';
import { theme } from '../styles/theme';
import { openSans, roboto } from '@/utils/fonts';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={openSans.className}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
