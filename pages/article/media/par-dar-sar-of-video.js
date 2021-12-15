import { Fragment } from 'react';
import Head from 'next/head';
import PAR_DAR_SAR_OfVideo from '../../../src/pages/article/media/PAR_DAR_SAR_OfVideo/PAR_DAR_SAR_OfVideo';

export default function PAR_DAR_SAR_OfVideoPage(props) {
  return (
    <Fragment>
      <Head>
        <title>视频参数PAR、DAR、SAR的区别</title>
        <meta name="keywords" content="视频, 媒体, PAR, DAR, SAR, FFmpeg" />
        <meta name="description" content="视频参数PAR、DAR、SAR的区别" />
      </Head>
      <PAR_DAR_SAR_OfVideo />
    </Fragment>
  );
}