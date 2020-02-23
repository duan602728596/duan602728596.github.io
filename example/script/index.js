const go = new Go();

globalThis.__SOLAR_SYSTEM__ = {};

async function main() {
  const result = await WebAssembly.instantiateStreaming(fetch('solar-system.wasm'), go.importObject);

  go.run(result.instance);

  const { __SOLAR_SYSTEM__: solarSystem } = globalThis;

  const planets = [
    { name: 'mercury', map: 'image/shuixing.jpg', r: 1, position: { x: 0, y: 0, z: 70 } },
    { name: 'venus', map: 'image/jinxing.jpg', r: 2, position: { x: 0, y: 0, z: 84 } },
    { name: 'earth', map: 'image/diqiu.jpg', r: 4, position: { x: 0, y: 0, z: 110 } },
    { name: 'mars', map: 'image/huoxing.jpg', r: 5, position: { x: 0, y: 0, z: 140 } },
    { name: 'jupiter', map: 'image/muxing.jpg', r: 17, position: { x: 0, y: 0, z: 220 } },
    { name: 'saturn', map: 'image/tuxing.jpg', r: 11, position: { x: 0, y: 0, z: 280 } },
    { name: 'uranus', map: 'image/tianwangxing.jpg', r: 9, position: { x: 0, y: 0, z: 350 } },
    { name: 'neptune', map: 'image/haiwangxing.jpg', r: 6, position: { x: 0, y: 0, z: 400 } }
  ];
  const options = {
    sun: {
      material: 'image/taiyang.jpg'
    },
    planets,
    rings: [
      {
        name: 'saturnRing',
        father: 'saturn',
        map: 'image/tuxing_huan.jpg',
        r: { min: 14, max: 22 },
        rotation: { x: 0.5, y: 0, z: 0 }
      },
      {
        name: 'uranusRing',
        father: 'uranus',
        map: 'image/tianwangxing_huan.jpg',
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
    ]
  };

  solarSystem.SolarSystem(THREE, $, '#solar', options);

  const $solar = $('#solar')[0];

  $('#btn').on('click', function(event) {
    $solar.requestFullscreen();
  });
}

main();