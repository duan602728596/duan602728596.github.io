import { Fragment } from 'react';
import Head from 'next/head';
import HowToUseGraphQL from '../../../src/pages/article/web/HowToUseGraphQL/HowToUseGraphQL';

export default function HowToUseGraphQLPage(props) {
  return (
    <Fragment>
      <Head>
        <title>如何使用GraphQL</title>
      </Head>
      <HowToUseGraphQL />
    </Fragment>
  );
}