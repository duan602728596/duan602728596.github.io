import { useState, useMemo, useSyncExternalStore } from 'react';
import { Card, Empty, Tag } from 'antd';
import style from './demo.module.sass';
import store from './store';

/* 展示文字 */
function View(props) {
  const valueCache = useSyncExternalStore(store.subscribe, store.getState, store.getState);
  const [value, setValue] = useState([]);

  // 渲染文字
  function textRender() {
    return value.map((item, index) => {
      return <Tag key={ item.id } className={ style.mb8 }>{ item.value }</Tag>;
    });
  }

  useMemo(function() {
    if (valueCache !== null) {
      setValue((prevState) => [...prevState, valueCache.value]);
      store.clearValueCache();
    }
  }, [valueCache]);

  return (
    <Card title="展示文字">
      { value.length > 0 ? textRender() : <Empty /> }
    </Card>
  );
}

export default View;