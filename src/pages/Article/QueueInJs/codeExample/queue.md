class Queue {
  constructor(workerLen) {
    this.workerLen = workerLen ?? 3;         // 同时执行的任务数
    this.list = [];                          // 任务队列
    this.worker = new Array(this.workerLen); // 正在执行的任务
  }

  /**
   * 执行一个任务
   * @param { number } index
   * @param { Function } fn: 执行的函数
   * @param { Array } args: 传递给执行函数的参数
   */
  *executionFunc(index, fn, ...args) {
    const _this = this;

    yield fn.call(...args)
      .then(function() {
        // 任务执行完毕后，再次分配任务并执行任务
        _this.worker[index] = undefined;
        _this.run();
      });
  }

  /**
   * 添加到任务队列
   * @param { Array<object> } list: 任务队列
   */
  addList(list) {
    for (const item of list) {
      this.list.unshift(item);
    }
  }

  // 分配并执行任务
  run() {
    const runIndex = [];

    for (let i = 0; i < this.workerLen; i++) {
      const len = this.list.length;

      if (!this.worker[i] && len > 0) {
        // 需要执行的任务
        this.worker[i] = this.executionFunc(i, ...this.list[len - 1]);

        runIndex.push(i);

        // 从任务队列内删除任务
        this.list.pop();
      }
    }

    // 执行任务
    for (const index of runIndex) {
      this.worker[index].next();
    }
  }
}