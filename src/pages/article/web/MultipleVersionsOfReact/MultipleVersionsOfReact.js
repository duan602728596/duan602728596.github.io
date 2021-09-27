import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';
import legacyDemo from './codeExample/legacyDemo.md';
import loaderDemo from './codeExample/loaderDemo.md';
import loaderUseDemo from './codeExample/loaderUseDemo.md';

const { Title, Paragraph, Text } = Typography;

/* 如何使用多版本的react */
function MultipleVersionsOfReact(props) {
  return (
    <ArticleLayout>
      <Title>如何使用多版本的React</Title>
      <Paragraph>
        在开发过程中使用联邦模块功能，使用其他项目的React组件，会出现&nbsp;
        <Text type="danger">Minified React error #321;</Text>
        &nbsp;错误。这是由于多个版本的React导致的。
      </Paragraph>
      <Paragraph>
        <a href="https://reactjs.org/blog/2020/08/10/react-v17-rc.html#changes-to-event-delegation"
          target="_blank"
          rel="noopener noreferrer"
        >
          在React@17中，事件系统进行了更改。
        </a>
        这可以让我们使用React的多版本，解决多个版本的React导致的错误。
      </Paragraph>
      <Title level={ 2 }>导出组件出口</Title>
      <Paragraph>我们创建一个函数，来包裹我们需要导出的组件出口。</Paragraph>
      <HighLight type="typescript">{ legacyDemo }</HighLight>
      <Paragraph>然后导出一个方法，供其他位置调用。</Paragraph>
      <HighLight type="javascript">export const createLegacyRoot = legacy(Component);</HighLight>
      <Title level={ 2 }>在其他项目调用方法</Title>
      <Paragraph>我们创建一个Loader函数，来加载导出的方法。</Paragraph>
      <HighLight type="javascript">{ loaderDemo }</HighLight>
      <Paragraph>然后加载组件并调用。</Paragraph>
      <HighLight type="javascript">{ loaderUseDemo }</HighLight>
      <Alert type="info"
        message={ [
          '参考地址：',
          <div key="react-gradual-upgrade-demo">
            React多版本的Demo：
            <a href="https://github.com/reactjs/react-gradual-upgrade-demo/" target="_blank" rel="noopener noreferrer">
              https://github.com/reactjs/react-gradual-upgrade-demo/
            </a>
          </div>,
          <div key="webpack-module-federation">
            webpack联邦模块官方文档：
            <a href="https://webpack.js.org/concepts/module-federation/" target="_blank" rel="noopener noreferrer">
              https://webpack.js.org/concepts/module-federation/
            </a>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default MultipleVersionsOfReact;