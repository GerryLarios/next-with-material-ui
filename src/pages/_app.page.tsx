import '@fontsource/roboto/500.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssReset, ThemeProvider } from 'components';
import { DashboardLayoutProvider } from 'context/DashboardLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <ThemeProvider>
        <CssReset />
        <DashboardLayoutProvider>
          <Component {...pageProps} />
        </DashboardLayoutProvider>
      </ThemeProvider>
    </>
  );
}
