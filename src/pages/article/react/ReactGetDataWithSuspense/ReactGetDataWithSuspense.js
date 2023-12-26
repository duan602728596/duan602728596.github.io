import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import BlankLink from '../../../../components/BlankLink/BlankLink';
import WrapPromiseExample from './codeExample/wrapPromise.mdx';
import WrapPromiseGetDataExample from './codeExample/wrapPromiseGetData.mdx';

const { Title, Paragraph, Text } = Typography;

/* 在react18中，配合Suspense来获取数据 */
function ReactGetDataWithSuspense(props) {
  return (
    <ArticleLayout>
      <Title>在React18中，配合Suspense来获取数据</Title>
      <Paragraph>
        在React18的版本中，
        <Text code={ true }>&lt;Suspense&gt;</Text>
        组件可以用于数据获取。
      </Paragraph>
      <Paragraph>首先，要实现一个数据的加载器：</Paragraph>
      <WrapPromiseExample />
      <Paragraph>然后在组件内调用：</Paragraph>
      <WrapPromiseGetDataExample />
      <Alert type="info"
        message={ [
          <h2 key="cankaodizhi" className="mb-0 py-[8px] text-[16px]">参考地址：</h2>,
          <div key="react-gradual-upgrade-demo" className="py-[8px]">
            React使用Suspense来获取数据的Demo：
            <BlankLink href="https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js">
              https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js
            </BlankLink>
          </div>,
          <div key="webpack-module-federation" className="py-[8px]">
            React Suspense for Data Fetching官方文档：
            <BlankLink href="https://reactjs.org/docs/concurrent-mode-suspense.html">
              https://reactjs.org/docs/concurrent-mode-suspense.html
            </BlankLink>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default ReactGetDataWithSuspense;