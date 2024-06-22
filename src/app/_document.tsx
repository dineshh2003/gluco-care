// src/app/_document.tsx

import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
          {/* Replace with asynchronous script loading if possible */}
          <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js" defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
