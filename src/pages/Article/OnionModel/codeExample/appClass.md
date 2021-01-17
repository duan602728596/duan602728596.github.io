class App {
  constructor() {
    this.tasks = []; // 执行的方法队列
  }
  
  // 将方法添加到队列
  use(...taskFunc) {
    this.tasks.push(...taskFunc);
  }
  
  // 最中心执行的函数
  do() {
    console.log('do');
  }
  
  // 创建洋葱模型
  createNext(ctx, i) {
    return async () => {
      return await this.tasks[i](
        ctx,
        i === (this.tasks.length - 1) ? this.do(ctx) : this.createNext(ctx, i + 1) // next
      );
    };
  }
  
  // 执行方法
  async run(ctx) {
    await this.createNext(Object.assign({}, ctx), 0)();
  }
}