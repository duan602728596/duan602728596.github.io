import { Fragment } from 'react';
import Head from 'next/head';
import GitCommonCommands from '../../../src/pages/article/git/GitCommonCommands/GitCommonCommands';

export default function GitCommonCommandsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Git的一些常用命令</title>
        <meta name="keywords" content="Git" />
        <meta name="description" content="Git的一些常用命令" />
      </Head>
      <GitCommonCommands />
    </Fragment>
  );
}