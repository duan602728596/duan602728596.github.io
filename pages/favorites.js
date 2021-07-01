import { Fragment } from 'react';
import Head from 'next/head';
import Index from '../src/pages/Index/index';

export default function IndexPage(props) {
  return (
    <Fragment>
      <Head>
        <title>收藏夹</title>
      </Head>
      <Index type="favorites" />
    </Fragment>
  );
}