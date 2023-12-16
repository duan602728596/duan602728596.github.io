import { Html, Head, Main, NextScript } from 'next/document';
import antdSSRJson from '../src/antd.ssr.json' with { type: 'json' };

export default function Document() {
  return (
    <Html lang="zh-cmn-Hans">
      <Head>
        <link rel="icon" href="/images/favicon.jpg" type="image/jpeg" />
        <link rel="stylesheet" href={ `/styles/${ antdSSRJson.css }` } />
        <link rel="stylesheet" href="/styles/github.css" />
        <script src="/scripts/live2dcubismcore.min.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}