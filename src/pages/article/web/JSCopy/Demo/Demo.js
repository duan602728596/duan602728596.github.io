import { Fragment, useRef } from 'react';
import { Typography, Button, Input, message } from 'antd';
import { CopyOutlined as IconCopyOutlined } from '@ant-design/icons';
import style from './demo.module.sass';

const { Title, Paragraph, Text } = Typography;

/* 代码演示 */
function Demo(props) {
  const inputRef = useRef(null);

  // 复制文本框内的文本
  function handleCopyInputValueClick(event) {
    inputRef.current.select();
    document.execCommand('copy');
  }

  // 复制文字
  function handleCopyTextClick(event) {
    const range = document.createRange();

    range.selectNode(document.getElementById('copyText')); // 设定range包含的节点对象

    // 窗口的selection对象，表示用户选择的文本
    const selection = window.getSelection();

    // 将已经包含的已选择的对象清除掉
    if (selection.rangeCount > 0) {
      selection.removeAllRanges();
    }

    // 将要复制的区域的range对象添加到selection对象中
    selection.addRange(range);
    document.execCommand('copy');
    message.success('文字复制成功！');
  }

  return (
    <Fragment>
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>
        复制这句话，然后粘贴到文本框中。
        <Text className={ style.copyText } id="copyText" mark={ true }>苟利国家生死以，岂因祸福避趋之。 --林则徐</Text>
      </Paragraph>
      <div className="mb-[16px]">
        <Input ref={ inputRef } aria-label="文本框" allowClear={ true } />
      </div>
      <div className="text-right">
        <Button.Group>
          <Button onClick={ handleCopyInputValueClick }>复制文本框内的文本</Button>
          <Button type="primary" icon={ <IconCopyOutlined /> } onClick={ handleCopyTextClick }>复制文字</Button>
        </Button.Group>
      </div>
    </Fragment>
  );
}

export default Demo;