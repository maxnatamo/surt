import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Surt" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Surt" />
        <meta name="description" content="Surt - a simple URL shortener" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="64x64" href="/icons/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://surt.maxtrier.dk" />
        <meta name="twitter:title" content="Surt" />
        <meta name="twitter:description" content="Surt - a simple URL shortener" />
        <meta name="twitter:image" content="https://surt.maxtrier.dk/icons/icon-192x192.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Surt" />
        <meta property="og:description" content="Surt - a simple URL shortener" />
        <meta property="og:site_name" content="Surt" />
        <meta property="og:url" content="https://surt.maxtrier.dk" />
        <meta property="og:image" content="https://surt.maxtrier.dk/icons/icon-192x192.png" />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
