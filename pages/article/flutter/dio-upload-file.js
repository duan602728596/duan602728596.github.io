import { Fragment } from 'react';
import Head from 'next/head';
import DioUploadFile from '../../../src/pages/article/flutter/DioUploadFile/DioUploadFile';

export default function DioUploadFilePage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用dio上传文件</title>
        <meta name="keywords" content="前端, Flutter, Dart, dio" />
        <meta name="description" content="使用dio上传文件" />
      </Head>
      <DioUploadFile />
    </Fragment>
  );
}