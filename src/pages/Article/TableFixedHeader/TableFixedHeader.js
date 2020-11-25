import { Fragment } from 'react';
import { Typography } from 'antd';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import HighLight from '../../../components/HighLight/HighLight';
import Demo from './Demo';
import tableExample from './codeExample/table.md';

const { Title, Paragraph } = Typography;

/* css和js来固定table的表头 */
function TableFixedHeader(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>如何使用css和js来固定table的表头</Title>
        <Paragraph>一个简单的Demo来实现固定table的表头。</Paragraph>
        <Title level={ 2 }>代码演示</Title>
        <Demo />
        <Title level={ 2 }>代码实现</Title>
        <HighLight type="html">{ tableExample }</HighLight>
      </Main>
    </Fragment>
  );
}

export default TableFixedHeader;