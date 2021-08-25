class App {
  constructor() {
    this.tasks = []; // 执行的方法队列
  }
  
  // 将方法添加到队列
  use(...taskFunc) {
    this.tasks.push(...taskFunc);
  }

  // 最中心执行的函数
  do(ctx) {
    console.log('do');
  }
  
  // 创建洋葱模型
  dispatch(ctx, i) {
    if (i === this.tasks.length) {
      return () => this.do(ctx);
    } else {
      return () => this.tasks[i](ctx, this.dispatch(ctx, i + 1));
    }
  }

  // 执行方法
  run(ctx) {
    return this.dispatch(Object.assign({}, ctx), 0)();
  }
}