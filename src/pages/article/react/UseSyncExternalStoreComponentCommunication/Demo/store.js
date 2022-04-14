class Store {
  valueCache = null; // 缓存值
  listener = null;   // 执行更新的函数

  // 注册
  subscribe = (listener) => {
    this.listener = listener;
  };

  // 获取valueCache的值
  getState = () => {
    return this.valueCache;
  };

  // 添加值
  setValueCache(value) {
    this.valueCache = { value };
    this.listener?.();
  }

  // 清除缓存
  clearValueCache() {
    this.valueCache = null;
  }
}

const store = new Store();

export default store;