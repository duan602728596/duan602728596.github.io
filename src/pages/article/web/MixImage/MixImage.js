import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import ClipPathImageMixDemo from './Demo/ClipPathImageMixDemo';
import ClipPathExample from './codeExample/clipPathExample.mdx';

const { Title, Paragraph } = Typography;

/* 使用CSS的clip-path属性实现图片探照灯效果 */
function MixImage(props) {
  return (
    <ArticleLayout>
      <Title>使用CSS的clip-path属性实现图片探照灯效果</Title>
      <Paragraph>
        今天在
        <a href="https://voussoir.net/writing/browser_in_the_dark" target="_blank" rel="noopener noreferrer">这个网站</a>
        上看到了一篇文章，使用CSS的clip-path属性实现的手电筒的特效，觉得非常赞，于是自己也模仿了一下。
      </Paragraph>
      <ClipPathImageMixDemo />
      <Title level={ 2 }>代码演示</Title>
      <ClipPathExample />
      <Alert type="info"
        message={ [
          '参考地址：',
          <div key="browser_in_the_dark">
            Browser in the Dark: flashlights with CSS and canvas：
            <a href="https://voussoir.net/writing/browser_in_the_dark" target="_blank" rel="noopener noreferrer">
              https://voussoir.net/writing/browser_in_the_dark
            </a>
          </div>,
          <div key="clip-path">
            clip-path：
            <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path" target="_blank" rel="noopener noreferrer">
              https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path
            </a>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default MixImage;