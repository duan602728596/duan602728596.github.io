import { Fragment } from 'react';
import Head from 'next/head';
import HowToCreateAsyncFunction from '../../../src/pages/article/web/HowToCreateAsyncFunction/HowToCreateAsyncFunction';

export default function HowToCreateAsyncFunctionPage(props) {
  return (
    <Fragment>
      <Head>
        <title>如何通过类似"new Function"创建异步函数</title>
        <meta name="keywords" content="前端, js, javascript" />
        <meta name="description" content='如何通过类似"new Function"创建异步函数' />
      </Head>
      <HowToCreateAsyncFunction />
    </Fragment>
  );
}