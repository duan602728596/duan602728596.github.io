import { ConfigProvider, Typography } from 'antd';
import 'antd/dist/reset.css';
import zhCN from 'antd/locale/zh_CN';
import { geekblue } from '@ant-design/colors';
import Live2dSuspense from '../src/components/Live2d/Live2dSuspense';
import Nav from '../src/components/Nav/Nav';
import Mdx from '../src/components/Mdx/Mdx';
import '../src/utils/Accessibility';
import '../src/Accessibility.sass';
import '../src/tailwindcss.css';

const { Title, Paragraph } = Typography;

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <ConfigProvider locale={ zhCN } theme={{ token: { colorPrimary: geekblue.primary } }}>
      <Nav />
      <Mdx>
        <Component { ...pageProps } />
      </Mdx>
      <Live2dSuspense />
    </ConfigProvider>
  );
}