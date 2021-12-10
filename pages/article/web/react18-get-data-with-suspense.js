import { Fragment } from 'react';
import Head from 'next/head';
import ReactGetDataWithSuspense from '../../../src/pages/article/web/ReactGetDataWithSuspense/ReactGetDataWithSuspense';

export default function ReactGetDataWithSuspensePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React18配合Suspense获取数据</title>
        <meta name="keywords" content="前端, js, javascript, react" />
        <meta name="description" content="在react18中，配合Suspense来获取数据" />
      </Head>
      <ReactGetDataWithSuspense />
    </Fragment>
  );
}