import { Application } from '@pixi/app';
import { extensions } from '@pixi/core';
import { Ticker, TickerPlugin } from '@pixi/ticker';
import { InteractionManager } from '@pixi/interaction';
// eslint-disable-next-line import/no-unresolved
import { Live2DModel } from 'pixi-live2d-display/cubism4';

extensions.add(TickerPlugin, InteractionManager /* 注册 InteractionManager 以支持 Live2D 模型的自动交互 */);

// 注册 Ticker 以支持 Live2D 模型的自动更新
Live2DModel.registerTicker(Ticker);

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
let animationTimer = null; // 定时器

/* 循环 */
async function cycleFrame() {
  const finish = models[modelsIndex].model3.internalModel.motionManager.isFinished();

  if (finish) {
    models[modelsIndex].mainIndexItem ??= 0;
    await models[modelsIndex].model3.internalModel.motionManager.startMotion('', models[modelsIndex].mainIndexItem);
    models[modelsIndex].mainIndexItem += 1;

    if (models[modelsIndex].mainIndexItem >= models[modelsIndex].mainIndex.length) {
      models[modelsIndex].mainIndexItem = 0;
    }
  }

  animationTimer = requestAnimationFrame(cycleFrame);
}

/**
 * 加载模型
 * https://guansss.github.io/pixi-live2d-display/api/classes/index.motionmanager.html
 */
export async function loadModel() {
  const item = models[modelsIndex];
  const { name, x, y, scale } = item;

  if (item.model3 === undefined) {
    item.model3 = await Live2DModel.from(`/moxing3/${ name }/${ name }.model3.json`);
    item.model3.x = x;
    item.model3.y = y;
    item.model3.scale.set(scale, scale);
    item.loginIndex ??= item.model3.internalModel.motionManager.definitions[''].findIndex((o) => o.File.includes('login'));

    item.mainIndex ??= do {
      const indexArr = [];

      item.model3.internalModel.motionManager.definitions[''].forEach((o, i) => {
        o.File.includes('main_') && indexArr.push(i);
      });

      indexArr;
    };
  }

  await item.model3.internalModel.motionManager.startMotion('', item.loginIndex);
  animationTimer = requestAnimationFrame(cycleFrame);
  app.stage.addChild(models[modelsIndex].model3);
}

/* 切换模型 */
export async function switchModel() {
  models[modelsIndex].model3.internalModel.motionManager.stopAllMotions();
  app.stage.removeChild(models[modelsIndex].model3);
  animationTimer !== null && cancelAnimationFrame(animationTimer);

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