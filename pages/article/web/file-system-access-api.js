import { Fragment } from 'react';
import Head from 'next/head';
import FileSystemAccessApi from '../../../src/pages/article/web/FileSystemAccessApi/FileSystemAccessApi';

export default function FileSystemAccessApiPage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用File System Access API访问文件</title>
        <meta name="keywords" content="前端, js, javascript, File System Access API" />
        <meta name="description" content="使用File System Access API访问文件" />
      </Head>
      <FileSystemAccessApi />
    </Fragment>
  );
}