import { Fragment } from 'react';
import Head from 'next/head';
import MixImage from '../../../src/pages/article/web/MixImage/MixImage';

export default function MixImagePage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用CSS的clip-path属性实现图片探照灯效果</title>
        <meta name="keywords" content="前端, CSS, clip-path" />
        <meta name="description" content="使用CSS的clip-path属性实现图片探照灯效果" />
      </Head>
      <MixImage />
    </Fragment>
  );
}