import { Fragment } from 'react';
import Head from 'next/head';
import UseSyncExternalStoreComponentCommunication
  from '../../../src/pages/article/react/UseSyncExternalStoreComponentCommunication/UseSyncExternalStoreComponentCommunication';

export default function UseSyncExternalStoreComponentCommunicationPage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用useSyncExternalStore实现组件通信</title>
        <meta name="keywords" content="前端, js, javascript, react, useSyncExternalStore" />
        <meta name="description" content="使用useSyncExternalStore实现组件通信" />
      </Head>
      <UseSyncExternalStoreComponentCommunication />
    </Fragment>
  );
}