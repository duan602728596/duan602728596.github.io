import { ConfigProvider, Typography } from 'antd';
import 'antd/dist/reset.css';
import zhCN from 'antd/locale/zh_CN';
import { geekblue } from '@ant-design/colors';
import { MDXProvider } from '@mdx-js/react';
import MdxCodeHighLight from '../src/components/HighLight/MdxCodeHighLight';
import Live2dSuspense from '../src/components/Live2d/Live2dSuspense';
import Nav from '../src/components/Nav/Nav';
import '../src/utils/Accessibility';
import '../src/Accessibility.sass';
import '../src/tailwindcss.css';

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

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <ConfigProvider locale={ zhCN } theme={{ token: { colorPrimary: geekblue.primary } }}>
      <Nav />
      <MDXProvider components={ MDXComponents }>
        <Component { ...pageProps } />
      </MDXProvider>
      <Live2dSuspense />
    </ConfigProvider>
  );
}