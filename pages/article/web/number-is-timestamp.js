import { Fragment } from 'react';
import Head from 'next/head';
import NumberIsTimeStamp from '../../../src/pages/article/web/NumberIsTimeStamp/NumberIsTimeStamp';

export default function NumberIsTimeStampPage(props) {
  return (
    <Fragment>
      <Head>
        <title>判断一串数字是有效的时间戳</title>
        <meta name="keywords" content="前端, js, javascript" />
        <meta name="判断一串数字是有效的时间戳" />
      </Head>
      <NumberIsTimeStamp />
    </Fragment>
  );
}