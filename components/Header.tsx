import { theme } from '@/styles/theme';
import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={theme.color.background} />
      <meta name="description" content="Design Studio website, minimalistic"></meta>
      <link rel="icon" sizes="96x96" href="/favicon-96x96.png" />
      <title>Agency Studio Branding</title>
    </Head>
  );
};

export default Header;
