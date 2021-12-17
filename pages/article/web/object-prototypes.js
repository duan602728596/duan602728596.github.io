import { Fragment } from 'react';
import Head from 'next/head';
import ObjectPrototypes from '../../../src/pages/article/web/ObjectPrototypes/ObjectPrototypes';

export default function ObjectPrototypesPage(props) {
  return (
    <Fragment>
      <Head>
        <title>JavaScript对象原型</title>
      </Head>
      <ObjectPrototypes />
    </Fragment>
  );
}