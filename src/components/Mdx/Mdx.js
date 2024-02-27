import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { MDXProvider } from '@mdx-js/react';
import MdxCodeHighLight from '../HighLight/MdxCodeHighLight';

const { Title, Paragraph } = Typography;

/**
 * mdx h3组件
 * @param { React.ReactNode } props.children
 */
function MdxH3(props) {
  return <Title level={ 3 } id={ props.children }>{ props.children }</Title>;
}

/**
 * mdx h4组件
 * @param { React.ReactNode } props.children
 */
function MdxH4(props) {
  return <Title level={ 4 }>{ props.children }</Title>;
}

const MDXComponents = {
  code: MdxCodeHighLight,
  p: Paragraph,
  h3: MdxH3,
  h4: MdxH4
};

function Mdx(props) {
  return (
    <MDXProvider components={ MDXComponents }>
      { props.children }
    </MDXProvider>
  );
}

Mdx.propTypes = {
  children: PropTypes.node
};

export default Mdx;