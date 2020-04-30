import React, { Fragment } from 'react';
import { Typography } from 'antd';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import HighLight from '../../../components/HighLight/HighLight';
import Demo from './Demo';
import copyExample from './codeExample/copy.md';
import copyFormControls from './codeExample/copyFormControls.md';

const { Title, Paragraph } = Typography;

/* js复制功能 */
function JSCopy(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>Javascript实现复制功能</Title>
        {/* 代码实现 */}
        <Title level={ 2 }>代码实现</Title>
        <Paragraph>html5的webAPI接口可以很轻松的使用短短的几行代码就实现复制功能，不需要依赖flash。</Paragraph>
        <HighLight type="javascript">{ copyExample }</HighLight>
        <Paragraph>当element为表单控件时，代码可以简化成：</Paragraph>
        <HighLight type="javascript">{ copyFormControls }</HighLight>
        <Demo />
      </Main>
    </Fragment>
  );
}

export default JSCopy;