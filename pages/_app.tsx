import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import 'firebase/auth';
import AppHeader from '../components/AppHeader';
import { initFirebase } from '../lib/firebase-client';
import { AuthProvider } from '../lib/user/AuthContext';
import '../styles/globals.css';
import '../styles/tailwind.css';

initFirebase();

/**
 * A Wrapper for the HackPortal web app.
 *
 * This is the root of the component heirarchy. When the site is hydrated, this
 * will load into memory and never re-initialize unless the page refreshes.
 */
function PortalApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <title>HackUTD VIII</title>
        <meta name="description" content="HackUTD VIII - Blast From the Past, a hackathon by ACM UTD." />

        {process.env.ENABLE_PWA ||
          (process.env.NODE_ENV !== 'development' && <link rel="manifest" href="/manifest.json" />)}

        <link rel="preload" href="/fonts/streamster.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/outrun-future.otf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/neon.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/good-times-rg.ttf" as="font" crossOrigin="anonymous" />
        <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#5D5FEF" />
      </Head>
      <div className="min-h-screen flex flex-col bg-black">
        <AppHeader />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default PortalApp;
