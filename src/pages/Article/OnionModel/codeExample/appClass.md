class App {
  constructor() {
    this.tasks = []; // 执行的方法队列
    this.state = {}; // 挂载的其他状态
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
  createNext(i, max) {
    return () => {
      return await this.tasks[i](
        this.state,
        i === max ? this.do : this.createNext(i + 1, max) // next
      );
    };
  }
  
  // 执行方法
  async run() {
    await this.createNext(0, this.tasks.length - 1)();
  }
}