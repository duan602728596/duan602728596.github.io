import { Typography } from 'antd';
import articleStyle from '../../article.module.sass';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import Demo from './Demo/Demo';
import DomToImageExample from './codeExample/domToImage.mdx';

const { Title, Paragraph, Text } = Typography;

/* dom绘制图片 */
function DomToImage(props) {
  return (
    <ArticleLayout>
      <Title>用JavaScript将DOM绘制成图片</Title>
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
        <Text className={ articleStyle.textWarning } type="warning" strong={ true }>
          如果样式在样式表内，则svg里面对应的class是无效的
        </Text>
        ，Chrome下可以把包含样式的style标签内容一并加进去，然后就可以通过类名来设置样式了，也可以通过遍历样式并添加
        <Text strong={ true } underline={ true }>style="key: value;"</Text>
        使样式生效。可以使用
        <Text strong={ true } underline={ true }>window.getComputedStyle</Text>
        来获取DOM的样式。 如果嫌麻烦，还可以使用
        <a href="https://github.com/niklasvh/html2canvas" target="_blank" rel="noopener noreferrer">html2canvas</a>
        库。
      </Paragraph>
      <Paragraph>SVG内DOM节点的xmlns属性不能省略。</Paragraph>
      <DomToImageExample />
      {/* 代码演示 */}
      <Demo />
    </ArticleLayout>
  );
}

export default DomToImage;