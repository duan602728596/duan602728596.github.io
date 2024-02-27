import { Fragment } from 'react';
import Head from 'next/head';
import Index from '../src/pages/Friends/index';

export default function FriendsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>友情链接 - 段昊辰的个人主页</title>
        <meta name="description" content="友情链接" />
      </Head>
      <Index />
    </Fragment>
  );
}