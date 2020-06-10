import React, { useEffect, useRef } from 'react';
import style from './demo.sass';

/* 代码演示 */
function Demo(props) {
  const layoutRef = useRef(null),
    theadTrRef = useRef(null);

  // 滚动时固定表头
  function handleLayoutScroll(event) {
    theadTrRef.current.style.transform = `translate3d(0, ${ event.target.scrollTop }px, 3px)`;
  }

  // 渲染body
  function bodyRender() {
    const element = [];

    for (let i = 0; i < 20; i++) {
      element.push(
        <tr key={ i }>
          <td>数据1</td>
          <td>数据2</td>
          <td>数据3</td>
        </tr>
      );
    }

    return element;
  }

  useEffect(function() {
    layoutRef.current.addEventListener('scroll', handleLayoutScroll, false);

    return function() {
      layoutRef.current.removeEventListener('scroll', handleLayoutScroll, false);
    };
  }, [layoutRef.current]);

  return (
    <div ref={ layoutRef } className={ style.demoBox }>
      <table className={ style.table }>
        <thead className={ style.thead }>
          <tr ref={ theadTrRef }>
            <th>表头1</th>
            <th>表头2</th>
            <th>表头3</th>
          </tr>
        </thead>
        <tbody>{ bodyRender() }</tbody>
      </table>
    </div>
  );
}

export default Demo;