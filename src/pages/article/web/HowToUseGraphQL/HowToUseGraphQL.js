import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import QuickStart from './codeExample/quickStart.mdx';
import QueryGraphQLExample from './codeExample/query.graphql.mdx';
import HumanGraphQLExample from './codeExample/human.graphql.mdx';
import UtilsExample from './codeExample/utils.mdx';
import QueryExample from './codeExample/query.mdx';

const { Title, Paragraph } = Typography;

/* 如何使用GraphQL */
function HowToUseGraphQL(props) {
  return (
    <ArticleLayout>
      <Title>如何使用GraphQL</Title>
      <Title level={ 2 }>快速开始</Title>
      <Paragraph>通过下面的代码，我们可以快速使用GraphQL实现查询。</Paragraph>
      <QuickStart />
      <Title level={ 2 }>使用@graphql-tools</Title>
      <Paragraph>我们可以使用@graphql-tools来使用GraphQL。</Paragraph>
      <Paragraph>首先我们先创建两个GraphQL文件。</Paragraph>
      <QueryGraphQLExample />
      <HumanGraphQLExample />
      <Paragraph>创建一个方法，用于加载GraphQL文件。</Paragraph>
      <UtilsExample />
      <Paragraph>实现查询。</Paragraph>
      <QueryExample />
    </ArticleLayout>
  );
}

export default HowToUseGraphQL;