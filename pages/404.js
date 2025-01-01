import { Fragment } from 'react';
import Head from 'next/head';
import Page404Component from '../src/pages/Page404/index';

export default function Page404(props) {
  return (
    <Fragment>
      <Head>
        <title>页面不存在 - 段昊辰的个人主页</title>
      </Head>
      <Page404Component />
    </Fragment>
  );
}