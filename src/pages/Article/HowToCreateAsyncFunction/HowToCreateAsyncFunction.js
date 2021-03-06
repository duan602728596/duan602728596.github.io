import { Fragment } from 'react';
import { Typography, Alert } from 'antd';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import HighLight from '../../../components/HighLight/HighLight';
import codeExample from './code/code.md';

const { Title } = Typography;

/* 创建异步函数 */
function HowToCreateAsyncFunction(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>如何通过类似"new Function"创建异步函数</Title>
        {/* 代码实现 */}
        <Title level={ 2 }>代码实现</Title>
        <HighLight type="javascript">{ codeExample }</HighLight>
        <Alert type="info"
          message={ [
            '参考地址：',
            <a key="link" href="https://davidwalsh.name/async-function-class" target="_blank" rel="noreferrer">
              https://davidwalsh.name/async-function-class
            </a>
          ] }
        />
      </Main>
    </Fragment>
  );
}

export default HowToCreateAsyncFunction;