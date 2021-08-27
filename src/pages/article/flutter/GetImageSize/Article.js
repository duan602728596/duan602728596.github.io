import { Fragment } from 'react';
import { Typography } from 'antd';
import HighLight from '../../../../components/HighLight/HighLight';
import imageSizeExample from './codeExample/imageSize.md';

const { Title, Paragraph } = Typography;

/* 文章 */
function Article(props) {
  return (
    <Fragment>
      <Title>在Flutter中如何获取图片的尺寸</Title>
      <Paragraph>在Flutter中，可以使用如下的方法获取图片的尺寸：</Paragraph>
      <HighLight type="dart">{ imageSizeExample }</HighLight>
    </Fragment>
  );
}

export default Article;