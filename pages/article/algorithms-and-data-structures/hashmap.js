import { Fragment } from 'react';
import Head from 'next/head';
import HashMap from '../../../src/pages/article/algorithmsAndDataStructures/HashMap/HashMap';

export default function HashMapPages(props) {
  return (
    <Fragment>
      <Head>
        <title>数据结构之HashMap</title>
      </Head>
      <HashMap />
    </Fragment>
  );
}