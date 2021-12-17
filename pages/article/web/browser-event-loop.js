import { Fragment } from 'react';
import Head from 'next/head';
import BrowserEventLoop from '../../../src/pages/article/web/BrowserEventLoop/BrowserEventLoop';

export default function BrowserEventLoopPage(props) {
  return (
    <Fragment>
      <Head>
        <title>浏览器事件循环</title>
      </Head>
      <BrowserEventLoop />
    </Fragment>
  );
}