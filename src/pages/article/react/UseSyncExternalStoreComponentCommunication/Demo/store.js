class Store {
  valueCache = null; // 缓存值
  listeners = [];   // 执行更新的函数

  // 注册
  subscribe = (listener) => {
    this.listeners.push(listener);

    return () => {
      this.listeners.splice(this.listeners.indexOf(listener), 1);
    };
  };

  // 获取valueCache的值
  getSnapshot = () => {
    return this.valueCache;
  };

  emit() {
    this.listeners.forEach((listener) => listener());
  }

  // 添加值
  setValueCache(value) {
    this.valueCache = { value };
    this.emit();
  }

  // 清除缓存
  clearValueCache() {
    this.valueCache = null;
  }
}

const store = new Store();

export default store;