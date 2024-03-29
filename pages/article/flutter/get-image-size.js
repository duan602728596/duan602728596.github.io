import { Fragment } from 'react';
import Head from 'next/head';
import GetImageSize from '../../../src/pages/article/flutter/GetImageSize/GetImageSize';

export default function GetImageSizePage(props) {
  return (
    <Fragment>
      <Head>
        <title>在Flutter的开发中，如何获取图片的尺寸</title>
        <meta name="keywords" content="前端, Flutter, Dart" />
        <meta name="description" content="在Flutter的开发中，如何获取图片的尺寸" />
      </Head>
      <GetImageSize />
    </Fragment>
  );
}