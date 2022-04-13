import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import InputText from './Demo/InputText';
import View from './Demo/View';
import ComponentCommunicationExample from './codeExample/componentCommunication.mdx';

const { Title, Paragraph } = Typography;

/* 使用useSyncExternalStore实现组件通信 */
function UseSyncExternalStoreComponentCommunication(props) {
  return (
    <ArticleLayout>
      <Title>使用useSyncExternalStore实现组件通信</Title>
      <Paragraph>在React18的版本中，新添加了一个Hook API：useSyncExternalStore，推荐用于从外部数据源读取和订阅的Hook。</Paragraph>
      <Paragraph>通过使用useSyncExternalStore，也可以用它实现组件间的通信。</Paragraph>
      <ComponentCommunicationExample />
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>这个例子展示了如何在一个组件内操作，然后将结果传递给另一个组件。</Paragraph>
      <InputText />
      <View />
    </ArticleLayout>
  );
}

export default UseSyncExternalStoreComponentCommunication;