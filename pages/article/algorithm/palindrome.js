import { Fragment } from 'react';
import Head from 'next/head';
import Palindrome from '../../../src/pages/article/algorithm/Palindrome';

export default function PalindromePage(props) {
  return (
    <Fragment>
      <Head>
        <title>实现一个回文算法</title>
        <meta name="keywords" content="算法, 回文算法" />
        <meta name="description" content="实现一个回文算法" />
      </Head>
      <Palindrome />
    </Fragment>
  );
}