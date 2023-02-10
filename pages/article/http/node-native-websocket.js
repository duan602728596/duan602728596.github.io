import { Fragment } from 'react';
import Head from 'next/head';
import NodeNativeWebsocket from '../../../src/pages/article/http/NodeNativeWebSocket/NodeNativeWebsocket';

export default function NodeNativeWebsocketPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Nodejs原生实现WebSocket服务</title>
        <meta name="keywords" content="websocket,nodejs" />
        <meta name="description" content="Nodejs原生实现WebSocket服务" />
      </Head>
      <NodeNativeWebsocket />
    </Fragment>
  );
}