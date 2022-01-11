import { Fragment } from 'react';
import Head from 'next/head';
import ComponentsCommonlyUsedInFlutter
  from '../../../src/pages/article/flutter/ComponentsCommonlyUsedInFlutter/ComponentsCommonlyUsedInFlutter';

export default function ComponentsCommonlyUsedInFlutterPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Flutter常用的组件</title>
        <meta name="keywords" content="Flutter, Dart" />
        <meta name="description" content="Flutter常用的组件" />
      </Head>
      <ComponentsCommonlyUsedInFlutter />
    </Fragment>
  );
}