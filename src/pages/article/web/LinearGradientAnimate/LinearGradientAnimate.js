import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import Demo from './Demo';
import HtmlExample from './codeExample/html.mdx';

const { Title, Paragraph, Text } = Typography;

/* SVG动画 */
function LinearGradientAnimate(props) {
  return (
    <ArticleLayout>
      <Title>使用SVG，让渐变的背景也能动起来</Title>
      <Paragraph>
        当背景是渐变色时，如果想实现过渡动画。直接使用css的
        <Text type="warning">transition</Text>
        是不行的。所以考虑使用svg来实现功能。
      </Paragraph>
      {/* 代码演示 */}
      <Demo />
      {/* 实现代码 */}
      <Title level={ 2 }>实现代码</Title>
      <HtmlExample />
    </ArticleLayout>
  );
}

export default LinearGradientAnimate;