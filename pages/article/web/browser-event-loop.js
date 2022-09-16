import { Fragment } from 'react';
import Head from 'next/head';
import BrowserEventLoop from '../../../src/pages/article/web/BrowserEventLoop/BrowserEventLoop';

export default function BrowserEventLoopPage(props) {
  return (
    <Fragment>
      <Head>
        <title>浏览器事件循环</title>
        <meta name="keywords" content="浏览器事件循环" />
        <meta name="description" content="浏览器事件循环" />
      </Head>
      <BrowserEventLoop />
    </Fragment>
  );
}