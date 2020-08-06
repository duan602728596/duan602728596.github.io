import React, { Fragment } from 'react';
import Head from 'next/head';
import StaticResourceInTypescript from '../../src/pages/Article/StaticResourceInTypescript/StaticResourceInTypescript';

export default function StaticResourceInTypescriptPage(props) {
  return (
    <Fragment>
      <Head>
        <title>如何在typescript内引入静态资源</title>
        <meta name="keywords" content="typescript, webpack" />
        <meta name="description" content="如何在typescript内引入静态资源" />
      </Head>
      <StaticResourceInTypescript />
    </Fragment>
  );
}