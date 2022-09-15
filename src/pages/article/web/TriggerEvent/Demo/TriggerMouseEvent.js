import { useRef } from 'react';
import { Popover, Button } from 'antd';

/* 触发鼠标事件 */
function TriggerMouseEvent(props) {
  const buttonRef = useRef(null);

  // 点击触发hover事件
  function handleTriggerHoverClick(event) {
    buttonRef.current.dispatchEvent(
      new MouseEvent('mouseover', { bubbles: true })
    );
  }

  return (
    <div className="mb-[16px]">
      <Popover content="这是一个气泡卡片。" title="气泡卡片" trigger="hover">
        <Button className="mb-[8px]" ref={ buttonRef } type="link">鼠标移动到上面，会显示一个气泡卡片。</Button>
      </Popover>
      <Button className="mb-[8px]" onClick={ handleTriggerHoverClick }>点击触发hover事件</Button>
    </div>
  );
}

export default TriggerMouseEvent;