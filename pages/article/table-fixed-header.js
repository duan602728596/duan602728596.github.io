import React, { Fragment } from 'react';
import Head from 'next/head';
import TableFixedHeader from '../../src/pages/Article/TableFixedHeader/TableFixedHeader';

export default function(props) {
  return (
    <Fragment>
      <Head>
        <title>如何使用css和js来固定table的表头</title>
        <meta name="keywords" content="css, javascript" />
        <meta name="description" content="如何使用css和js来固定table的表头" />
      </Head>
      <TableFixedHeader />
    </Fragment>
  );
}