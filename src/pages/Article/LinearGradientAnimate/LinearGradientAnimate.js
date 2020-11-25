import { Fragment } from 'react';
import { Typography } from 'antd';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import HighLight from '../../../components/HighLight/HighLight';
import Demo from './Demo';
import htmlExample from './codeExample/html.md';

const { Title, Paragraph, Text } = Typography;

/* SVG动画 */
function LinearGradientAnimate(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>使用SVG，让渐变的背景也能动起来</Title>
        <Paragraph>
          当背景是渐变色时，如果想实现过渡动画。直接使用css的
          <Text type="warning">transition</Text>
          是不行的。所以考虑使用svg来实现功能。
        </Paragraph>
        {/* 代码演示 */}
        <Demo />
        {/* 实现代码 */}
        <Title level={ 2 }>实现代码</Title>
        <HighLight type="html">{ htmlExample }</HighLight>
      </Main>
    </Fragment>
  );
}

export default LinearGradientAnimate;