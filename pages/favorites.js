import { Fragment } from 'react';
import Head from 'next/head';
import Index from '../src/pages/Index/index';

export default function IndexPage(props) {
  return (
    <Fragment>
      <Head>
        <title>收藏夹 - 段昊辰的个人主页</title>
        <meta name="description" content="段昊辰的收藏夹" />
      </Head>
      <Index type="favorites" />
    </Fragment>
  );
}