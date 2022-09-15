import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import GlobalExample from './codeExample/global.mdx';
import ReactRefreshExample from './codeExample/reactRefresh.mdx';
import ReactRefreshLoaderExample from './codeExample/ReactRefreshLoader.mdx';
import WebpackExample from './codeExample/webpack.mdx';

const { Title, Paragraph, Text } = Typography;

/* 如何使用React Fast Refresh */
function ReactFastRefresh(props) {
  return (
    <ArticleLayout>
      <Title>如何使用React Fast Refresh</Title>
      <Paragraph>
        <Text className="inline-block" code={ true }>react-refresh</Text>
        是react官方实现的热替换方案，用于替换其他的方案，如
        <Text className="inline-block" code={ true }>react-hot-loader</Text>等。
      </Paragraph>
      <Title level={ 2 }>在项目中使用react-refresh（webpack）</Title>
      <Paragraph>
        在babel配置中，需要添加babel插件
        <Text className="inline-block" code={ true }>react-refresh/babel</Text>。
      </Paragraph>
      <Paragraph>添加全局代码。</Paragraph>
      <GlobalExample />
      <Paragraph>在组件代码的头和尾添加代码。</Paragraph>
      <ReactRefreshExample />
      <Paragraph>
        这段代码必须在被
        <Text className="inline-block" code={ true }>react-refresh/babel</Text>
        编译后的代码之前，否则不生效。
      </Paragraph>
      <Paragraph>所以在webpack中，可以通过开发loader，来添加这段代码。</Paragraph>
      <ReactRefreshLoaderExample />
      <Paragraph>
        也可以通过
        <Text className="inline-block" code={ true }>string-replace-loader</Text>
        来注入这段代码。
      </Paragraph>
      <WebpackExample />
      <Alert type="info"
        message={ [
          <b key="cankaodizhi" className="block py-[8px]">参考地址：</b>,
          <div key="fast-refresh" className="py-[8px]">
            Fast Refresh：
            <a href="https://github.com/facebook/react/issues/16604#issuecomment-528663101" target="_blank" rel="noopener noreferrer">
              https://github.com/facebook/react/issues/16604#issuecomment-528663101
            </a>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default ReactFastRefresh;