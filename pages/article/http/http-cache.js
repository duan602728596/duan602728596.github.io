import { Fragment } from 'react';
import Head from 'next/head';
import HttpCache from '../../../src/pages/article/http/HttpCache/HttpCache';

export default function HttpCachePage(props) {
  return (
    <Fragment>
      <Head>
        <title>HTTP缓存策略</title>
        <meta name="keywords" content="HTTP" />
        <meta name="description" content="HTTP缓存策略" />
      </Head>
      <HttpCache />
    </Fragment>
  );
}