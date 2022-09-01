import { Fragment } from 'react';
import Head from 'next/head';
import Win11RightClickMenuRestoreToWin10
  from '../../../src/pages/article/operatingSystem/Win11RightClickMenuRestoreToWin10/Win11RightClickMenuRestoreToWin10';

export default function Win11RightClickMenuRestoreToWin10Page(props) {
  return (
    <Fragment>
      <Head>
        <title>将Win11的右键菜单还原到Win10的样式</title>
        <meta name="keywords" content="Win11, Win10, 右键菜单" />
        <meta name="description" content="将Win11的右键菜单还原到Win10" />
      </Head>
      <Win11RightClickMenuRestoreToWin10 />
    </Fragment>
  );
}