import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import TriggerMouseEvent from './Demo/TriggerMouseEvent';
import TriggerEventDemo from './codeExample/triggerEvent.mdx';

const { Title, Paragraph } = Typography;

/* 在浏览器中触发事件 */
function TriggerEvent(props) {
  return (
    <ArticleLayout>
      <Title>在浏览器中触发事件</Title>
      <Paragraph>可以使用Event在浏览器中触发hover等各种类型的事件。</Paragraph>
      <TriggerEventDemo />
      <Title level={ 2 }>代码演示</Title>
      <TriggerMouseEvent />
    </ArticleLayout>
  );
}

export default TriggerEvent;