import { Fragment } from 'react';
import Head from 'next/head';
import CSSImageCentered from '../../src/pages/Article/CSSImageCentered/CSSImageCentered';

export default function DomToImagePage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用css让图片自适应居中</title>
        <meta name="keywords" content="前端, css, 图片自适应, 图片居中" />
        <meta name="使用css让图片自适应居中" />
      </Head>
      <CSSImageCentered />
    </Fragment>
  );
}