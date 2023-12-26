import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import BlankLink from '../../../../components/BlankLink/BlankLink';
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
        <BlankLink href="https://voussoir.net/writing/browser_in_the_dark">这个网站</BlankLink>
        上看到了一篇文章，使用CSS的clip-path属性实现的手电筒的特效，觉得非常赞，于是自己也模仿了一下。
      </Paragraph>
      <ClipPathImageMixDemo />
      <Title level={ 2 }>代码演示</Title>
      <ClipPathExample />
      <Alert type="info"
        message={ [
          <h2 key="cankaodizhi" className="mb-0 py-[8px] text-[16px]">参考地址：</h2>,
          <div key="browser_in_the_dark" className="py-[8px]">
            Browser in the Dark: flashlights with CSS and canvas：
            <BlankLink href="https://voussoir.net/writing/browser_in_the_dark">
              https://voussoir.net/writing/browser_in_the_dark
            </BlankLink>
          </div>,
          <div key="clip-path" className="py-[8px]">
            clip-path：
            <BlankLink href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path">
              https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path
            </BlankLink>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default MixImage;