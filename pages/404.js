import { Fragment } from 'react';
import Head from 'next/head';
import { Result, Button } from 'antd';
import Nav from '../src/components/Nav/Nav';
import Picture from '../src/components/Picture/Picture';

export default function Page404(props) {
  return (
    <Fragment>
      <Head>
        <title>404 - 段昊辰的个人主页</title>
      </Head>
      <Nav />
      <Result title="对不起，页面不存在。"
        icon={
          <Picture avifSrc="/images/404/nengdai.avif"
            webpSrc="/images/404/nengdai.webp"
            src="/images/404/nengdai.jpg"
          />
        }
        extra={ <Button type="primary" href="/">返回</Button> }
      />
    </Fragment>
  );
}