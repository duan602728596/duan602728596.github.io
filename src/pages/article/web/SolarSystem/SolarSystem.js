import { useEffect, useRef } from 'react';
import { Typography, Button } from 'antd';
import classNames from 'classnames';
import style from './solarSystem.module.sass';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import BlankLink from '../../../../components/BlankLink/BlankLink';
import loadPublicScript from '../../../../utils/loadPublicScript';

const { Title, Paragraph } = Typography;

globalThis.__SOLAR_SYSTEM__ = {};

/* 初始化wasm */
async function solarInit() {
  const go = new Go();
  const result = await WebAssembly.instantiateStreaming(
    fetch('/scripts/solar-system.wasm'),
    go.importObject
  );

  go.run(result.instance);

  const { __SOLAR_SYSTEM__: solarSystem } = globalThis;
  const planets = [
    { name: 'mercury', map: '/images/solar-system/shuixing.jpg', r: 1, position: { x: 0, y: 0, z: 70 } },
    { name: 'venus', map: '/images/solar-system/jinxing.jpg', r: 2, position: { x: 0, y: 0, z: 84 } },
    { name: 'earth', map: '/images/solar-system/diqiu.jpg', r: 4, position: { x: 0, y: 0, z: 110 } },
    { name: 'mars', map: '/images/solar-system/huoxing.jpg', r: 5, position: { x: 0, y: 0, z: 140 } },
    { name: 'jupiter', map: '/images/solar-system/muxing.jpg', r: 17, position: { x: 0, y: 0, z: 220 } },
    { name: 'saturn', map: '/images/solar-system/tuxing.jpg', r: 11, position: { x: 0, y: 0, z: 280 } },
    { name: 'uranus', map: '/images/solar-system/tianwangxing.jpg', r: 9, position: { x: 0, y: 0, z: 350 } },
    { name: 'neptune', map: '/images/solar-system/haiwangxing.jpg', r: 6, position: { x: 0, y: 0, z: 400 } }
  ];
  const options = {
    sun: { material: '/images/solar-system/taiyang.jpg' },
    planets,
    rings: [
      {
        name: 'saturnRing',
        father: 'saturn',
        map: '/images/solar-system/tuxing_huan.jpg',
        r: { min: 14, max: 22 },
        rotation: { x: 0.5, y: 0, z: 0 }
      },
      {
        name: 'uranusRing',
        father: 'uranus',
        map: '/images/solar-system/tianwangxing_huan.jpg',
        r: { min: 10, max: 12 },
        rotation: { x: 0, y: 0, z: 0.3 }
      }
    ],
    rotations: [
      { name: 'sun', rot: 0.01, rev: 0, deg: 0, l: 0 },
      { name: 'mercury', rot: 0.1, rev: 0.1, deg: 0, l: planets[0].position.z },
      { name: 'venus', rot: 0.05, rev: 0.07, deg: 0, l: planets[1].position.z },
      { name: 'earth', rot: 0.05, rev: 0.03, deg: 0, l: planets[2].position.z },
      { name: 'mars', rot: 0.03, rev: 0.01, deg: 0, l: planets[3].position.z },
      { name: 'jupiter', rot: 0.003, rev: 0.002, deg: 0, l: planets[4].position.z },
      { name: 'saturn', rot: 0.01, rev: 0.0009, deg: 0, l: planets[5].position.z },
      { name: 'saturnRing', rot: 0.01, rev: 0.0009, deg: 0, l: planets[5].position.z },
      { name: 'uranus', rot: 0.005, rev: 0.0005, deg: 0, l: planets[6].position.z },
      { name: 'uranusRing', rot: 0.005, rev: 0.0005, deg: 0, l: planets[6].position.z },
      { name: 'neptune', rot: 0.003, rev: 0.0003, deg: 0, l: planets[7].position.z }
    ],
    bg: [
      '/images/solar-system/bg0.jpg',
      '/images/solar-system/bg1.jpg'
    ]
  };

  solarSystem.SolarSystem(THREE, 'solar', options);
}

/* 太阳系 */
function SolarSystem(props) {
  const canvasBoxRef = useRef(null);

  // 全屏
  async function handleRequestFullscreenClick(event) {
    const solar = canvasBoxRef.current;

    if (solar.requestFullscreen) {
      await solar.requestFullscreen();
    } else if (solar.webkitRequestFullscreen) {
      await solar.webkitRequestFullscreen();
    } else if (solar.mozRequestFullscreen) {
      await solar.mozRequestFullscreen();
    } else if (solar.msRequestFullscreen) {
      await solar.msRequestFullscreen();
    }
  }

  // 加载脚本
  async function loadScript() {
    await Promise.all([
      loadPublicScript('/scripts/tinygo_wasm_exec.min.js', 'tinygo_wasm_exec'),
      loadPublicScript('/scripts/three.min.js', 'three')
    ]);
    await loadPublicScript('/scripts/OrbitControls.js', 'three-orbitControls');
    solarInit();
  }

  useEffect(function() {
    if (typeof Go === 'undefined' && typeof THREE === 'undefined') {
      loadScript();
    } else {
      solarInit();
    }
  }, []);

  return (
    <ArticleLayout>
      <Title>基于Three.js + wasm开发的太阳系动画</Title>
      <Paragraph>
        太阳系动画。基于Three.js和wasm开发。
        <BlankLink href="https://github.com/duan602728596/duan602728596.github.io/tree/dev/solar-system">（代码）</BlankLink>
      </Paragraph>
      <div className="mb-[16px] text-right">
        <Button type="primary" onClick={ handleRequestFullscreenClick }>全屏运行</Button>
      </div>
      <div ref={ canvasBoxRef } className={ classNames('h-[400px]', style.canvasBox) } id="solar" />
    </ArticleLayout>
  );
}

export default SolarSystem;