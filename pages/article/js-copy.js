import React, { Fragment } from 'react';
import Head from 'next/head';
import JSCopy from '../../src/pages/Article/JSCopy/JSCopy';

export default function(props) {
  return (
    <Fragment>
      <Head>
        <title>Javascript实现复制功能</title>
        <meta name="keywords" content="前端, js, javascript, 复制" />
        <meta name="Javascript实现复制功能" />
      </Head>
      <JSCopy />
    </Fragment>
  );
}