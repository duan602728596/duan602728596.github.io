import { Fragment } from 'react';
import Head from 'next/head';
import BrowserScreenSharing from '../../../src/pages/article/web/BrowserScreenSharing/BrowserScreenSharing';

export default function BrowserScreenSharingPage(props) {
  return (
    <Fragment>
      <Head>
        <title>浏览器中实现屏幕共享功能</title>
        <meta name="keywords" content="前端, javascript" />
        <meta name="description" content="浏览器中实现屏幕共享功能" />
      </Head>
      <BrowserScreenSharing />
    </Fragment>
  );
}