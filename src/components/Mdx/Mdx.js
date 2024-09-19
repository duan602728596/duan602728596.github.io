import { Typography } from 'antd';
import { MDXProvider } from '@mdx-js/react';
import MdxCodeHighLight from '../HighLight/MdxCodeHighLight';

const { Title, Paragraph } = Typography;

/**
 * 创建mdx标题组件
 * @param { 1 | 2 | 3 | 4 | 5 } level
 */
function MdxTitle(level) {
  /**
   * @param { React.ReactNode } props.children
   */
  return function(props) {
    return <Title level={ level } id={ props.children }>{ props.children }</Title>;
  };
}

const MDXComponents = {
  pre: MdxCodeHighLight,
  p: Paragraph,
  h1: MdxTitle(1),
  h2: MdxTitle(2),
  h3: MdxTitle(3),
  h4: MdxTitle(4)
};

function Mdx(props) {
  return (
    <MDXProvider components={ MDXComponents }>
      { props.children }
    </MDXProvider>
  );
}

export default Mdx;