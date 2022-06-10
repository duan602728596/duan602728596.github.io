import { Fragment } from 'react';
import Head from 'next/head';
import ServerSendEvent from '../../../src/pages/article/http/ServerSentEvents/ServerSentEvents';

export default function ServerSentEventsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用Server-sent events技术，与浏览器单向通信</title>
        <meta name="keywords" content="Server-sent events" />
        <meta name="description" content="使用Server-sent events，与浏览器单向通信" />
      </Head>
      <ServerSendEvent />
    </Fragment>
  );
}