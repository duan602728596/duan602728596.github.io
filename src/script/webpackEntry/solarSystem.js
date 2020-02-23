import Go from 'go';
import * as THREE from 'three';
import $ from 'jquery';

const go = new Go();
const $fullScreen = $('#fullScreen'),
  $solar = $('#solar');

globalThis.__SOLAR_SYSTEM__ = {};

/* 全屏 */
async function handleRequestFullscreenClick(event) {
  const solar = $solar[0];

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

async function init() {
  const result = await WebAssembly.instantiateStreaming(
    fetch('/static/script/solar-system.wasm'),
    go.importObject
  );

  go.run(result.instance);

  const { __SOLAR_SYSTEM__: solarSystem } = globalThis;

  const planets = [
    { name: 'mercury', map: '/static/image/solar-system/shuixing.jpg', r: 1, position: { x: 0, y: 0, z: 70 } },
    { name: 'venus', map: '/static/image/solar-system/jinxing.jpg', r: 2, position: { x: 0, y: 0, z: 84 } },
    { name: 'earth', map: '/static/image/solar-system/diqiu.jpg', r: 4, position: { x: 0, y: 0, z: 110 } },
    { name: 'mars', map: '/static/image/solar-system/huoxing.jpg', r: 5, position: { x: 0, y: 0, z: 140 } },
    { name: 'jupiter', map: '/static/image/solar-system/muxing.jpg', r: 17, position: { x: 0, y: 0, z: 220 } },
    { name: 'saturn', map: '/static/image/solar-system/tuxing.jpg', r: 11, position: { x: 0, y: 0, z: 280 } },
    { name: 'uranus', map: '/static/image/solar-system/tianwangxing.jpg', r: 9, position: { x: 0, y: 0, z: 350 } },
    { name: 'neptune', map: '/static/image/solar-system/haiwangxing.jpg', r: 6, position: { x: 0, y: 0, z: 400 } }
  ];
  const options = {
    sun: { material: '/static/image/solar-system/taiyang.jpg' },
    planets,
    rings: [
      {
        name: 'saturnRing',
        father: 'saturn',
        map: '/static/image/solar-system/tuxing_huan.jpg',
        r: { min: 14, max: 22 },
        rotation: { x: 0.5, y: 0, z: 0 }
      },
      {
        name: 'uranusRing',
        father: 'uranus',
        map: '/static/image/solar-system/tianwangxing_huan.jpg',
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
      '/static/image/solar-system/bg0.jpg',
      '/static/image/solar-system/bg1.jpg'
    ]
  };

  solarSystem.SolarSystem(THREE, $, '#solar', options);
  $fullScreen.on('click', handleRequestFullscreenClick);
}

init();