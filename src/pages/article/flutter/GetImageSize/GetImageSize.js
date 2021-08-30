import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';
import imageSizeExample from './codeExample/imageSize.md';

const { Title, Paragraph } = Typography;

/* 在flutter中获取图片的尺寸 */
function GetImageSize(props) {
  return (
    <ArticleLayout>
      <Title>在Flutter的开发中，如何获取图片的尺寸</Title>
      <Paragraph>在Flutter的开发中，可以使用如下的方法获取图片的尺寸：</Paragraph>
      <HighLight type="dart">{ imageSizeExample }</HighLight>
    </ArticleLayout>
  );
}

export default GetImageSize;