import { Fragment } from 'react';
import Head from 'next/head';
import LinearGradientAnimate from '../../src/pages/Article/LinearGradientAnimate/LinearGradientAnimate';

export default function LinearGradientAnimatePage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用SVG，让渐变的背景也能动起来</title>
        <meta name="keywords" content="前端, SVG" />
        <meta name="description" content="使用SVG，让渐变的背景也能动起来" />
      </Head>
      <LinearGradientAnimate />
    </Fragment>
  );
}