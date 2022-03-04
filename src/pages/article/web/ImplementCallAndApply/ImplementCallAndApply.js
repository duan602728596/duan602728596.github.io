import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import CustomCallAndApplyExample from './codeExample/customCallAndApply.mdx';

const { Title, Paragraph } = Typography;

/* 实现call和apply方法 */
function ImplementCallAndApply(props) {
  return (
    <ArticleLayout>
      <Title>实现call和apply方法</Title>
      <Paragraph>一道经典的面试题：如何实现call和apply方法。实现方法如下：</Paragraph>
      <CustomCallAndApplyExample />
    </ArticleLayout>
  );
}

export default ImplementCallAndApply;