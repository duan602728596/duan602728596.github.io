import React, { Fragment } from 'react';
import Head from 'next/head';
import QueueInJs from '../../src/pages/Article/QueueInJs/QueueInJs';

export default function QueueInJsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>用JS实现多个任务并行执行的队列</title>
        <meta name="keywords" content="前端, js, javascript, typescript, node" />
        <meta name="description" content="用JS实现多个任务并行执行的队列" />
      </Head>
      <QueueInJs />
    </Fragment>
  );
}