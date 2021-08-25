import { Fragment } from 'react';
import Head from 'next/head';
import ComplexStyleInTextField from '../../src/pages/Article/ComplexStyleInTextField/ComplexStyleInTextField';

export default function ComplexStyleInTextFieldPage(props) {
  return (
    <Fragment>
      <Head>
        <title>在TextField中实现复杂的样式</title>
        <meta name="keywords" content="前端, Flutter, Dart" />
        <meta name="在TextField中实现复杂的样式" />
      </Head>
      <ComplexStyleInTextField />
    </Fragment>
  );
}