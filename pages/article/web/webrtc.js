import { Fragment } from 'react';
import Head from 'next/head';
import WebRTC from '../../../src/pages/article/web/WebRTC/WebRTC';

export default function WebRTCPage(props) {
  return (
    <Fragment>
      <Head>
        <title>在浏览器中使用WebRTC进行通信</title>
        <meta name="keywords" content="前端, javascript, RTC, WebRTC" />
        <meta name="description" content="WebRTC的知识，在浏览器中使用WebRTC进行通信。" />
      </Head>
      <WebRTC />
    </Fragment>
  );
}