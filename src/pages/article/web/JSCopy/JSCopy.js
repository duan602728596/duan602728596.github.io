import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import Demo from './Demo/Demo';
import CopyExample from './codeExample/copy.mdx';
import CopyFormControlsExample from './codeExample/copyFormControls.mdx';

const { Title, Paragraph } = Typography;

/* js复制功能 */
function JSCopy(props) {
  return (
    <ArticleLayout>
      <Title>JavaScript实现复制功能</Title>
      {/* 代码实现 */}
      <Title level={ 2 }>代码实现</Title>
      <Paragraph>html5的webAPI接口可以很轻松的使用短短的几行代码就实现复制功能，不需要依赖flash。</Paragraph>
      <CopyExample />
      <Paragraph>当element为表单控件时，代码可以简化成：</Paragraph>
      <CopyFormControlsExample />
      {/* 代码演示 */}
      <Demo />
    </ArticleLayout>
  );
}

export default JSCopy;