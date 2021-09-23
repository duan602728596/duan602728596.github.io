import { Typography } from 'antd';
import style from './CSSImageCentered.sass';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';
import Picture from '../../../../components/Picture/Picture';

const { Title, Paragraph } = Typography;

/* css让图片自适应居中 */
function CSSImageCentered(props) {
  return (
    <ArticleLayout>
      <Title>使用css让图片自适应居中</Title>
      <Paragraph>通过CSS，让图片自适应居中，效果如下：</Paragraph>
      <Picture className={ style.picture }
        imageClassName={ style.image }
        avifSrc="/images/css-img-centered/31.avif"
        webpSrc="/images/css-img-centered/31.webp"
        src="/images/css-img-centered/31.jpg"
      />
      <Picture className={ style.picture }
        imageClassName={ style.image }
        avifSrc="/images/css-img-centered/32.avif"
        webpSrc="/images/css-img-centered/32.webp"
        src="/images/css-img-centered/32.png"
      />
      {/* 代码演示 */}
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>实现这种特效有两种方式。</Paragraph>
      <Title level={ 3 }>第一种</Title>
      <HighLight type="css">
        { `.image-box {
  display: flex;
  width: 500px;
  height: 400px;
}

.image {
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}` }
      </HighLight>
      <Title level={ 3 }>第二种</Title>
      <HighLight type="css">
        { `.image-box {
  width: 500px;
  height: 400px;
  text-align: center;
  line-height: 398px;
}

.image {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}` }
      </HighLight>
    </ArticleLayout>
  );
}

export default CSSImageCentered;