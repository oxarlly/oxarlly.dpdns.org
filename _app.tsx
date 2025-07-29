// pages/_app.tsx
import { RybbitProvider } from 'next-rybbit';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RybbitProvider siteId="YOUR_SITE_ID">
      <Component {...pageProps} />
    </RybbitProvider>
  );
}