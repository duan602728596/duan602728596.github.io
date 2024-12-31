import { Fragment } from 'react';
import Head from 'next/head';
import CommonApiOfPandas from '../../../src/pages/article/python/CommonApiOfPandas/CommonApiOfPandas';

export default function commonApiOfPandasPage(props) {
  return (
    <Fragment>
      <Head>
        <title>pandas的常用API</title>
        <meta name="keywords" content="pandas" />
        <meta name="description" content="pandas的常用API" />
      </Head>
      <CommonApiOfPandas />
    </Fragment>
  );
}