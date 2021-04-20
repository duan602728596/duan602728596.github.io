import { Fragment } from 'react';
import Head from 'next/head';
import SolarSystem from '../../src/pages/Article/SolarSystem/SolarSystem';

export default function SolarSystemPage(props) {
  return (
    <Fragment>
      <Head>
        <title>基于Three.js + wasm开发的太阳系动画</title>
        <meta name="keywords" content="前端, js, javascript, typescript, three.js, wasm" />
        <meta name="description" content="基于Three.js + wasm开发的太阳系动画" />
        <script src="/scripts/tinygo_wasm_exec.min.js" />
        <script src="/scripts/three.min.js" />
        <script src="/scripts/OrbitControls.js" />
      </Head>
      <SolarSystem />
    </Fragment>
  );
}