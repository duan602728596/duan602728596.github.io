import { Fragment } from 'react';
import Head from 'next/head';
import MultipleVersionsOfReact from '../../../src/pages/article/web/MultipleVersionsOfReact/MultipleVersionsOfReact';

export default function MultipleVersionsOfReactPage(props) {
  return (
    <Fragment>
      <Head>
        <title>如何使用多版本的React</title>
        <meta name="keywords" content="前端, React, module-federation, 模块联邦" />
        <meta name="description" content="如何使用多版本的React" />
      </Head>
      <MultipleVersionsOfReact />
    </Fragment>
  );
}