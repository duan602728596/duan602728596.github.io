import React, { Fragment } from 'react';
import Head from 'next/head';
import OnionModel from '../../src/pages/Article/OnionModel/OnionModel';

export default function OnionModelPage(props) {
  return (
    <Fragment>
      <Head>
        <title>洋葱模型的简单实现</title>
        <meta name="keywords" content="前端, js, javascript" />
        <meta name="洋葱模型的简单实现" />
      </Head>
      <OnionModel />
    </Fragment>
  );
}