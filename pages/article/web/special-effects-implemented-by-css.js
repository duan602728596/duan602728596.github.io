import { Fragment } from 'react';
import Head from 'next/head';
import SpecialEffectsImplementedByCSS from '../../../src/pages/article/web/SpecialEffectsImplementedByCSS/SpecialEffectsImplementedByCSS';

export default function SpecialEffectsImplementedByCSSPage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用css动画实现各种特效</title>
        <meta name="keywords" content="前端, CSS" />
        <meta name="description" content="CSS, CSS特效, 搜索框伸缩" />
      </Head>
      <SpecialEffectsImplementedByCSS />
    </Fragment>
  );
}