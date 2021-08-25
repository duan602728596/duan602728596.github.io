import { Fragment } from 'react';
import { Typography } from 'antd';
import Nav from '../../../../components/Nav/Nav';
import Main from '../../../../components/Main/Main';
import HighLight from '../../../../components/HighLight/HighLight';
import Demo from './Demo';

const { Title, Paragraph } = Typography;

/* 判断一串数字是有效的时间戳 */
function NumberIsTimeStamp(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>判断一串数字是有效的时间戳</Title>
        <Paragraph>通过换算的时间是否是1970年来判断是否是有效的时间戳。</Paragraph>
        <HighLight type="javascript">
          new Date(time).toString() !== new Date(1).toString()
        </HighLight>
        <Demo />
      </Main>
    </Fragment>
  );
}

export default NumberIsTimeStamp;