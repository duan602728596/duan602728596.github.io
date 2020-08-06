import React, { Fragment } from 'react';
import { Typography } from 'antd';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import HighLight from '../../../components/HighLight/HighLight';
import appClassExample from './codeExample/appClass.md';
import runExample from './codeExample/run.md';

const { Title, Paragraph } = Typography;

/* 洋葱模型的简单实现 */
function OnionModel(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>洋葱模型的简单实现</Title>
        <Paragraph>用一段简单的代码，实现洋葱模型。</Paragraph>
        <HighLight type="javascript">{ appClassExample }</HighLight>
        <Paragraph>执行代码，</Paragraph>
        <HighLight type="javascript">{ runExample }</HighLight>
        <Paragraph>会打印出如下结果。</Paragraph>
        <HighLight>{ '0\n1\ndo\n2' }</HighLight>
      </Main>
    </Fragment>
  );
}

export default OnionModel;