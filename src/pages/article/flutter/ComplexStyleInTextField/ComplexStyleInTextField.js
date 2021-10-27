import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';
import Picture from '../../../../components/Picture/Picture';
import style from './article.module.sass';
import TextEditingControllerExample from './codeExample/TextEditingController.md';
import TextFieldExample from './codeExample/TextField.md';

const { Title, Paragraph, Text } = Typography;

/* 在TextField中实现复杂的样式 */
function ComplexStyleInTextField() {
  return (
    <ArticleLayout>
      <Title>在TextField中实现复杂的样式</Title>
      <Paragraph>在Flutter开发中，如果想要用TextField实现复杂的样式，比如：</Paragraph>
      <Picture className={ style.picture }
        imageClassName={ style.image }
        avifSrc="/images/complex-style-in-text-field/tangshi.avif"
        webpSrc="/images/complex-style-in-text-field/tangshi.webp"
        src="/images/complex-style-in-text-field/tangshi.png"
      />
      <Paragraph>
        两个<Text strong={ true }>#</Text>
        之间被识别为tag，高亮为蓝色。
      </Paragraph>
      <Paragraph>
        为了实现这样的效果，我们需要扩展
        <Text strong={ true }>TextEditingController</Text>：
      </Paragraph>
      <HighLight type="dart">{ TextEditingControllerExample }</HighLight>
      <Paragraph>之后用它来创建TextField的controller：</Paragraph>
      <HighLight type="dart">{ TextFieldExample }</HighLight>
    </ArticleLayout>
  );
}

export default ComplexStyleInTextField;