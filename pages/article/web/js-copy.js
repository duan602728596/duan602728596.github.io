import { Fragment } from 'react';
import Head from 'next/head';
import JSCopy from '../../../src/pages/article/web/JSCopy/JSCopy';

export default function JSCopyPage(props) {
  return (
    <Fragment>
      <Head>
        <title>JavaScript实现复制功能</title>
        <meta name="keywords" content="前端, js, javascript, 复制" />
        <meta name="description" content="Javascript实现复制功能" />
      </Head>
      <JSCopy />
    </Fragment>
  );
}