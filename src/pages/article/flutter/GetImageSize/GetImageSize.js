import { Fragment } from 'react';
import { Typography } from 'antd';
import Nav from '../../../../components/Nav/Nav';
import Main from '../../../../components/Main/Main';
import HighLight from '../../../../components/HighLight/HighLight';
import imageSizeExample from './codeExample/imageSize.md';

const { Title, Paragraph } = Typography;

/* 在flutter中获取图片的尺寸 */
function GetImageSize(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>在Flutter的开发中如何获取图片的尺寸</Title>
        <Paragraph>在Flutter的开发中，可以使用如下的方法获取图片的尺寸：</Paragraph>
        <HighLight type="dart">{ imageSizeExample }</HighLight>
      </Main>
    </Fragment>
  );
}

export default GetImageSize;