import { Html, Head, Main, NextScript } from 'next/document';
// eslint-disable-next-line import/no-unresolved
import antdSSRJson from '../src/antd.ssr.json' with { type: 'json' };

export default function Document() {
  return (
    <Html lang="zh-cmn-Hans">
      <Head>
        <meta name="renderer" content="webkit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Window-target" content="_top" />
        <meta name="author" content="段昊辰, duanhaochen@126.com" />
        <meta name="copyright" content="段昊辰, duanhaochen@126.com" />
        <link rel="icon" href="/images/favicon.jpg" type="image/jpeg" />
        {
          process.env.NODE_ENV === 'production'
            ? <link rel="stylesheet" href={ `/styles/${ antdSSRJson.css }` } />
            : null
        }
        <link rel="stylesheet" href="/styles/github.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}