import { Fragment } from 'react';
import { Typography } from 'antd';
import style from './article.sass';
import HighLight from '../../../components/HighLight/HighLight';

const { Title, Paragraph } = Typography;

const example0 = `.image-box {
   display: flex;
   width: 500px;
   height: 400px;
}

.image {
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}`;
const example1 = `.image-box {
  width: 500px;
  height: 400px;
  text-align: center;
  line-height: 398px;
}

.image {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}`;


/* 文章 */
function Article(props) {
  return (
    <Fragment>
      <Title>使用css让图片自适应居中</Title>
      <Paragraph>通过CSS，让图片自适应居中，效果如下：</Paragraph>
      <picture className={ style.picture }>
        <source srcSet="/images/css-img-centered/css-img-centered-1.avif" type="image/avif" />
        <source srcSet="/images/css-img-centered/css-img-centered-1.webp" type="image/webp" />
        <img className={ style.image } src="/images/css-img-centered/css-img-centered-1.png" />
      </picture>
      <picture className={ style.picture }>
        <source srcSet="/images/css-img-centered/css-img-centered-2.avif" type="image/avif" />
        <source srcSet="/images/css-img-centered/css-img-centered-2.webp" type="image/webp" />
        <img className={ style.image } src="/images/css-img-centered/css-img-centered-2.png" />
      </picture>
      {/* 代码演示 */}
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>实现这种特效有两种方式。</Paragraph>
      <Title level={ 3 }>第一种</Title>
      <HighLight type="css">{ example0 }</HighLight>
      <Title level={ 3 }>第二种</Title>
      <HighLight type="css">{ example1 }</HighLight>
    </Fragment>
  );
}

export default Article;