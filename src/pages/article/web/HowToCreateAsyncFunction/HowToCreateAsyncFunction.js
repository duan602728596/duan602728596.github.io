import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import CodeExample from './code/code.mdx';

const { Title } = Typography;

/* 创建异步函数 */
function HowToCreateAsyncFunction(props) {
  return (
    <ArticleLayout>
      <Title>如何通过类似"new Function"创建异步函数</Title>
      {/* 代码实现 */}
      <Title level={ 2 }>代码实现</Title>
      <CodeExample />
      <Alert type="info"
        message={ [
          '参考地址：',
          <a key="link" href="https://davidwalsh.name/async-function-class" target="_blank" rel="noopener noreferrer">
            https://davidwalsh.name/async-function-class
          </a>
        ] }
      />
    </ArticleLayout>
  );
}

export default HowToCreateAsyncFunction;