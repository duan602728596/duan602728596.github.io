import React, { Fragment } from 'react';
import Head from 'next/head';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export default function(props) {
  const { Component, pageProps } = props;

  return (
    <Fragment>
      <Head>
        <meta name="renderer" content="webkit" />
        <meta httpEquiv="Window-target" content="_top" />
        <meta name="author" content="段昊辰, duanhaochen@126.com" />
        <meta name="copyright" content="段昊辰, duanhaochen@126.com" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon.jpg" type="image/jpeg" />
      </Head>
      <ConfigProvider locale={ zhCN }>
        <Component { ...pageProps } />
      </ConfigProvider>
    </Fragment>
  );
}