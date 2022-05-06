import { Fragment } from 'react';
import Head from 'next/head';
import ReactFastRefresh from '../../../src/pages/article/react/ReactFastRefresh/ReactFastRefresh';

export default function ReactFastRefreshPage(props) {
  return (
    <Fragment>
      <Head>
        <title>如何使用React Fast Refresh</title>
        <meta name="keywords" content="前端, React, react-refresh, hot loader" />
        <meta name="description" content="如何使用React Fast Refresh" />
      </Head>
      <ReactFastRefresh />
    </Fragment>
  );
}