import { Application } from '@pixi/app';
import { Renderer } from '@pixi/core';
import { Ticker, TickerPlugin } from '@pixi/ticker';
import { InteractionManager } from '@pixi/interaction';
import { Live2DModel } from 'pixi-live2d-display/lib/cubism4';

// 注册 Ticker 以支持 Live2D 模型的自动更新
Application.registerPlugin(TickerPlugin);
Live2DModel.registerTicker(Ticker);

// 注册 InteractionManager 以支持 Live2D 模型的自动交互
Renderer.registerPlugin('interaction', InteractionManager);

/* 模型 */
const models = [
  { name: 'jianye_2', x: -4, y: 0, scale: 0.026 },
  { name: 'wuqi_2', x: -5, y: 0, scale: 0.026 },
  { name: 'dafeng_4', x: -5, y: 0, scale: 0.03 },
  { name: 'shengluyisi_4', x: 0, y: 20, scale: 0.035 },
  { name: 'xukufu_3', x: 0, y: -40, scale: 0.032 },
  { name: 'dafeng_2', x: -15, y: -20, scale: 0.04 }
];

export const modelsLength = models.length;

/* 随机数 */
function randomIndex() {
  return Math.floor(Math.random() * modelsLength);
}

/* app */
let app = null;
let modelsIndex = randomIndex(); // 当前的模型index

/* 加载模型 */
export async function loadModel() {
  const item = models[modelsIndex];
  const { name, x, y, scale } = item;

  if (item.model3 === undefined) {
    item.model3 = await Live2DModel.from(`/moxing3/${ name }/${ name }.model3.json`);
    item.model3.x = x;
    item.model3.y = y;
    item.model3.scale.set(scale, scale);
  }

  app.stage.addChild(models[modelsIndex].model3);
}

/* 切换模型 */
export async function switchModel() {
  app.stage.removeChild(models[modelsIndex].model3);

  let newIndex = modelsIndex + 1;

  if (newIndex === modelsLength) {
    newIndex = 0;
  }

  modelsIndex = newIndex;

  await loadModel();
}

/**
 * 初始化live2d
 * @param { HTMLCanvasElement } canvas
 */
export async function live2dInit(canvas) {
  try {
    app = new Application({
      view: canvas,
      autoStart: true,
      backgroundAlpha: 0,
      width: 220,
      height: 220
    });

    await loadModel();
  } catch (err) {
    console.error(err);
  }
}