import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  });

  return <Component {...pageProps} />;
}
export default MyApp;
