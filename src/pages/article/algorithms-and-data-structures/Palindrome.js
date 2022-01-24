import { Typography } from 'antd';
import ArticleLayout from '../components/ArticleLayout/ArticleLayout';
import Demo from './Demo';
import PalindromeExample from './codeExample/palindrome.mdx';

const { Title, Paragraph } = Typography;

/* 回文算法 */
function Palindrome(props) {
  return (
    <ArticleLayout>
      <Title>实现一个回文算法</Title>
      <Paragraph>总结了一下自己实现的回文算法。</Paragraph>
      <PalindromeExample />
      {/* 代码演示 */}
      <Demo />
    </ArticleLayout>
  );
}

export default Palindrome;