import { Fragment } from 'react';
import Head from 'next/head';
import TriggerEvent from '../../../src/pages/article/web/TriggerEvent/TriggerEvent';

export default function TriggerEventPage(props) {
  return (
    <Fragment>
      <Head>
        <title>在浏览器中触发事件</title>
        <meta name="keywords" content="前端, javascript, event" />
        <meta name="description" content="实现call和apply方法" />
      </Head>
      <TriggerEvent />
    </Fragment>
  );
}