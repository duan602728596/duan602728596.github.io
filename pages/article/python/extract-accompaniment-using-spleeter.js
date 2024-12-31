import { Fragment } from 'react';
import Head from 'next/head';
import ExtractAccompanimentUsingSpleeter from '../../../src/pages/article/python/ExtractAccompanimentUsingSpleeter/ExtractAccompanimentUsingSpleeter';

export default function ExtractAudioUsingSpleeterPage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用Spleeter提取伴奏</title>
        <meta name="keywords" content="视频, 媒体" />
        <meta name="description" content="使用Spleeter提取伴奏" />
      </Head>
      <ExtractAccompanimentUsingSpleeter />
    </Fragment>
  );
}