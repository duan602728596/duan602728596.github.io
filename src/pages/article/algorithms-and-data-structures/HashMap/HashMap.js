import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HashMapExample from './codeExample/HashMap.mdx';

const { Title, Paragraph } = Typography;

/* 数据结构之HashMap */
function HashMap(props) {
  return (
    <ArticleLayout>
      <Title>数据结构之HashMap</Title>
      <Paragraph>HashMap的结构，是数组+链表+红黑树的结构。当链表长度大于8时，转为红黑树结构。HashMap是线程不安全的。</Paragraph>
      <Title level={ 2 }>模拟实现一个HashMap</Title>
      <Paragraph>
        在我面试微软时，有一道题目是用JavaScript模拟实现一个HashMap。当时不了解HashMap是什么。
        所以现在重新模拟实现HashMap，没有红黑树的结构，也没有线程安全的保证。存粹是为了学习。
      </Paragraph>
      <HashMapExample />
    </ArticleLayout>
  );
}

export default HashMap;