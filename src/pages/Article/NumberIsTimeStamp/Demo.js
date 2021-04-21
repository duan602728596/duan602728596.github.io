import { Fragment, useState } from 'react';
import { Typography, Input, Button, Alert } from 'antd';
import style from './demo.sass';

const { Title, Paragraph } = Typography;

/* 代码演示 */
function Demo(props) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(undefined);

  // 输出判断结果
  function handleOutResultClick(event) {
    if (!(value && /^[0-9]+$/.test(value))) return;

    const r = new Date(Number(value)).toString() !== new Date(1).toString();

    setResult({
      result: r,
      text: `${ value }${ r ? '' : '不' }是有效的时间戳。`
    });
  }

  return (
    <Fragment>
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>输入时间戳，判断时间戳是否有效。</Paragraph>
      <div className={ style.marginBottom }>
        <label>时间戳：</label>
        <Input className={ style.timeInput } value={ value } onChange={ (event) => setValue(event.target.value) } />
        <Button type="primary" onClick={ handleOutResultClick }>判断结果</Button>
      </div>
      { result !== undefined && <Alert type={ result.result ? 'success' : 'error' } description={ result.text } /> }
    </Fragment>
  );
}

export default Demo;