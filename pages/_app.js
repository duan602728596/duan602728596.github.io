import { Fragment } from 'react';
import Head from 'next/head';
import ConfigProvider from 'antd/es/config-provider';
import zhCN from 'antd/es/locale/zh_CN';
import { Typography } from 'antd';
import { MDXProvider } from '@mdx-js/react';
import '../src/utils/Accessibility';
import MdxCodeHighLight from '../src/components/HighLight/MdxCodeHighLight';
import Live2dSuspense from '../src/components/Live2d/Live2dSuspense';
import '../src/main.tailwindcss';
import '../src/Accessibility.sass';

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
    <Fragment>
      <Head>
        <meta name="renderer" content="webkit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Window-target" content="_top" />
        <meta name="author" content="段昊辰, duanhaochen@126.com" />
        <meta name="copyright" content="段昊辰, duanhaochen@126.com" />
      </Head>
      <ConfigProvider locale={ zhCN }>
        <MDXProvider components={ MDXComponents }>
          <Component { ...pageProps } />
        </MDXProvider>
      </ConfigProvider>
      <Live2dSuspense />
    </Fragment>
  );
}