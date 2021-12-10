import { Fragment } from 'react';
import Head from 'next/head';
import DomToImage from '../../../src/pages/article/web/DomToImage/DomToImage';

export default function DomToImagePage(props) {
  return (
    <Fragment>
      <Head>
        <title>用Javascript将DOM绘制成图片</title>
        <meta name="keywords" content="前端, js, javascript, DOM转图片, canvas, svg" />
        <meta name="description" content="用Javascript将DOM绘制成图片" />
      </Head>
      <DomToImage />
    </Fragment>
  );
}