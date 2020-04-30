// 延迟执行的函数
function sleep(id, time) {
  console.log('开始id', id);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('结束id', id);
      resolve();
    }, time * 1000);
  });
}

const queue = new Queue();

// 添加到任务队列
queue.addList([
  [sleep, undefined, '0001', 3],
  [sleep, undefined, '0002', 5],
  [sleep, undefined, '0003', 8],
  [sleep, undefined, '0004', 1],
  [sleep, undefined, '0005', 12],
  [sleep, undefined, '0006', 8],
  [sleep, undefined, '0007', 2],
  [sleep, undefined, '0008', 10]
]);

// 执行任务
queue.run();