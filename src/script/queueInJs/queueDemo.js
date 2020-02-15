import $ from 'jquery';
import Queue from './Queue';

const queue = new Queue();
const $completed = $('#completed');
const $startQueue = $('#start-queue');
const $resetQueue = $('#reset-queue');
const taskStatus = [3, 9, 12, 5, 7, 1].map((item, index) => {
  return {
    element: $(`#task-status-${ index }`),
    time: item
  };
});

/* 已完成 */
const completedList = [];

/* 任务 */
function taskFunc($e, index, time) {
  $e.removeClass('text-secondary')
    .addClass('text-warning')
    .text('执行中');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      $e.removeClass('text-warning')
        .addClass('text-success')
        .text('已完成');

      completedList.push(`任务${ index + 1 }`);
      $completed.html(completedList.join('，'));

      // 执行完毕
      if (completedList.length === 6) {
        $resetQueue.prop('disabled', false);
      }
      resolve();
    }, time * 1000);
  });
}

/* 开始任务 */
function handleStartClick(event) {
  $startQueue.addClass('d-none');
  $resetQueue.removeClass('d-none');

  const list = taskStatus.map((item, index) => {
    return [taskFunc, undefined, item.element, index, item.time];
  });

  queue.addList(list);
  queue.run();
}

/* 重置任务 */
function handleResetClick(event) {
  taskStatus.forEach((item, index) => {
    item.element.removeClass('text-success')
      .addClass('text-secondary')
      .text('未执行');
  });
  $completed.html('无');
  $resetQueue.addClass('d-none')
    .prop('disabled', true);
  $startQueue.removeClass('d-none');
}

function init() {
  $startQueue.on('click', handleStartClick);
  $resetQueue.on('click', handleResetClick);
}

export default init;