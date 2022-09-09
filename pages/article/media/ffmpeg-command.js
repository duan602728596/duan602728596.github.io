import { Fragment } from 'react';
import Head from 'next/head';
import FFmpegCommand from '../../../src/pages/article/media/FFmpegCommand/FFmpegCommand';

export default function FFmpegCommandPage(props) {
  return (
    <Fragment>
      <Head>
        <title>FFmpeg常用的命令</title>
        <meta name="keywords" content="视频, 媒体, FFmpeg" />
        <meta name="description" content="FFmpeg常用的命令" />
      </Head>
      <FFmpegCommand />
    </Fragment>
  );
}