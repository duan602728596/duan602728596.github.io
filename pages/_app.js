import { Fragment } from 'react';
import Head from 'next/head';
import ConfigProvider from 'antd/es/config-provider';
import zhCN from 'antd/es/locale/zh_CN';
import { Typography } from 'antd';
import { MDXProvider } from '@mdx-js/react';
import MdxCodeHighLight from '../src/components/HighLight/MdxCodeHighLight';
import Live2dSuspense from '../src/components/Live2d/Live2dSuspense';
import '../src/main.tailwindcss';

const { Title, Paragraph } = Typography;

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
        <link rel="icon" href="/images/favicon.jpg" type="image/jpeg" />
        <script src="/scripts/live2dcubismcore.min.js" />
      </Head>
      <ConfigProvider locale={ zhCN }>
        <MDXProvider components={{
          code: MdxCodeHighLight,
          p: Paragraph,
          h3: (p) => <Title level={ 3 } id={ p.children }>{ p.children }</Title>,
          h4: (p) => <Title level={ 4 }>{ p.children }</Title>
        }}>
          <Component { ...pageProps } />
          <Live2dSuspense />
        </MDXProvider>
      </ConfigProvider>
    </Fragment>
  );
}