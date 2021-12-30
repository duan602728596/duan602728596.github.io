import { Fragment } from 'react';
import Head from 'next/head';
import SolarSystem from '../../../src/pages/article/web/SolarSystem/SolarSystem';

export default function SolarSystemPage(props) {
  return (
    <Fragment>
      <Head>
        <title>基于Three.js + wasm开发的太阳系动画</title>
        <meta name="keywords" content="前端, js, javascript, typescript, three.js, wasm" />
        <meta name="description" content="基于Three.js + wasm开发的太阳系动画" />
      </Head>
      <SolarSystem />
    </Fragment>
  );
}