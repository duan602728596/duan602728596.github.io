import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import ErrorExample from './codeExample/error.mdx';
import ModuleExample from './codeExample/module.mdx';
import TypesExample from './codeExample/types.mdx';

const { Title, Paragraph } = Typography;

/* 在typescript内引入静态资源 */
function StaticResourceInTypescript(props) {
  return (
    <ArticleLayout>
      <Title>如何在TypeScript内引入静态资源</Title>
      <Paragraph>在ts文件中，如果引入了静态资源模块（比如css、图片等），会报错，提示找不到模块。</Paragraph>
      <ErrorExample />
      <Paragraph>可以使用全局类型声明写法，来声明类型。</Paragraph>
      <ModuleExample />
      {/* 配置 */}
      <Title level={ 2 }>一份可用的完整配置</Title>
      <TypesExample />
    </ArticleLayout>
  );
}

export default StaticResourceInTypescript;