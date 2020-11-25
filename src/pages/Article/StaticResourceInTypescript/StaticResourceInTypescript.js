import { Fragment } from 'react';
import { Typography } from 'antd';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import HighLight from '../../../components/HighLight/HighLight';
import errorExample from './codeExample/error.md';
import moduleExample from './codeExample/module.md';
import typesExample from './codeExample/types.md';

const { Title, Paragraph } = Typography;

/* 在typescript内引入静态资源 */
function StaticResourceInTypescript(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>如何在typescript内引入静态资源</Title>
        <Paragraph>在ts文件中，如果引入了静态资源模块（比如css、图片等），会报错，提示找不到模块。</Paragraph>
        <HighLight type="typescript">{ errorExample }</HighLight>
        <Paragraph>可以使用全局类型声明写法，来声明类型。</Paragraph>
        <HighLight type="typescript">{ moduleExample }</HighLight>
        {/* 配置 */}
        <Title level={ 2 }>一份可用的完整配置</Title>
        <HighLight type="typescript">{ typesExample }</HighLight>
      </Main>
    </Fragment>
  );
}

export default StaticResourceInTypescript;