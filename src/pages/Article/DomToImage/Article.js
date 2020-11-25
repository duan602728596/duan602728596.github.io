import { Fragment } from 'react';
import { Typography } from 'antd';
import HighLight from '../../../components/HighLight/HighLight';
import Demo from './Demo';
import domToImageExample from './codeExample/domToImage.md';

const { Title, Paragraph, Text } = Typography;

/* 文章 */
function Article(props) {
  return (
    <Fragment>
      <Title>用Javascript将DOM绘制成图片</Title>
      <Paragraph>
        之前看到了一个动画，
        <a href="https://jdc.jd.com/lab/2018-ae2css/washer/" target="_blank" rel="noopener noreferrer">
          https://jdc.jd.com/lab/2018-ae2css/washer/
        </a>
        ，就琢磨着怎么简单实现一下。要做的，就是将DOM的内容原原本本复制，并绘制成图片。
      </Paragraph>
      {/* 实现原理 */}
      <Title level={ 2 }>实现原理</Title>
      <Paragraph>
        SVG的
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/foreignObject"
          target="_blank"
          rel="noopener noreferrer"
        >
          foreignObject
        </a>
        标签，可以包含html片段，这样就可以将整个DOM片段转换成SVG。
      </Paragraph>
      <Paragraph>
        不过要注意的是，
        <Text type="warning" strong={ true }>在svg里面的class是无效的</Text>
        ，样式只有
        <Text strong={ true } underline={ true }>style="key: value;"</Text>
        才能生效。 可以使用
        <Text strong={ true } underline={ true }>window.getComputedStyle</Text>
        来获取DOM的样式。 如果嫌麻烦，还可以使用
        <a href="https://github.com/niklasvh/html2canvas" target="_blank" rel="noopener noreferrer">html2canvas</a>
        库。
      </Paragraph>
      <Paragraph>SVG内DOM节点的xmlns属性不能省略。</Paragraph>
      <HighLight type="javascript">{ domToImageExample }</HighLight>
      {/* 代码演示 */}
      <Demo />
    </Fragment>
  );
}

export default Article;