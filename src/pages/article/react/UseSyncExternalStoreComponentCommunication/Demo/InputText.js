import { useState } from 'react';
import { Card, Input, Button } from 'antd';
import style from './demo.module.sass';
import store from './store';

/* 输入文字 */
function InputText(props) {
  const [value, setValue] = useState('');

  // 添加到文本
  function handleAddTextClick(event) {
    if (value && !/^\s*$/i.test(value)) {
      store.setValueCache({
        value,
        id: `${ Math.random() }`.replace(/0./, '')
      });
      setValue('');
    }
  }

  return (
    <Card className={ style.mb16 } title="输入文本">
      <div className="flex">
        <div className="grow">
          <Input value={ value } onChange={ (event) => setValue(event.target.value) } />
        </div>
        <div className="shrink-0">
          <Button onClick={ handleAddTextClick }>添加</Button>
        </div>
      </div>
    </Card>
  );
}

export default InputText;