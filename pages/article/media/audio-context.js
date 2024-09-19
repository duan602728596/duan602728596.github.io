import { Fragment } from 'react';
import Head from 'next/head';
import AudioContextUse from '../../../src/pages/article/media/AudioContextUse/AudioContextUse';

export default function ExtractAudioUsingSpleeterPage(props) {
  return (
    <Fragment>
      <Head>
        <title>AudioContext的使用</title>
      </Head>
      <AudioContextUse />
    </Fragment>
  );
}