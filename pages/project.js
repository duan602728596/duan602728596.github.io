import React, { Fragment } from 'react';
import Head from 'next/head';
import Index from '../src/pages/Project/Index';

export default function(props) {
  return (
    <Fragment>
      <Head>
        <title>开源项目 - 段昊辰的个人主页</title>
      </Head>
      <Index />
    </Fragment>
  );
}