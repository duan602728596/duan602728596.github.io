import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';
import AppClassExample from './codeExample/appClass.mdx';
import RunExample from './codeExample/run.mdx';

const { Title, Paragraph } = Typography;

/* 洋葱模型的简单实现 */
function OnionModel(props) {
  return (
    <ArticleLayout>
      <Title>洋葱模型的简单实现</Title>
      <Paragraph>用一段简单的代码，实现洋葱模型。</Paragraph>
      <AppClassExample />
      <Paragraph>执行代码，</Paragraph>
      <RunExample />
      <Paragraph>会打印出如下结果。</Paragraph>
      <HighLight>{ '0\n1\ndo\n2' }</HighLight>
    </ArticleLayout>
  );
}

export default OnionModel;