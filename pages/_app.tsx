import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  });

  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
export default MyApp;
