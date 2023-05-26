import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
});

export const openSans = Open_Sans({ subsets: ['latin'] });
