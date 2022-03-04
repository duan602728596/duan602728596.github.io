import { Fragment } from 'react';
import Head from 'next/head';
import ImplementCallAndApply from '../../../src/pages/article/web/ImplementCallAndApply/ImplementCallAndApply';

export default function ImplementCallAndApplyPage(props) {
  return (
    <Fragment>
      <Head>
        <title>实现call和apply方法</title>
        <meta name="keywords" content="前端, javascript" />
        <meta name="description" content="实现call和apply方法" />
      </Head>
      <ImplementCallAndApply />
    </Fragment>
  );
}