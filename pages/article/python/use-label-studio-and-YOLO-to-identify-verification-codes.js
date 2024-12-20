import { Fragment } from 'react';
import Head from 'next/head';
import UseLabelStudioAndYOLOToIdentifyVerificationCodes
  from '../../../src/pages/article/python/UseLabelStudioAndYOLOToIdentifyVerificationCodes/UseLabelStudioAndYOLOToIdentifyVerificationCodes';

export default function UseLabelStudioAndYOLOToIdentifyVerificationCodesPage(props) {
  return (
    <Fragment>
      <Head>
        <title>使用label-studio和YOLO识别验证码</title>
        <meta name="keywords" content="label-studio, YOLO" />
        <meta name="description" content="使用label-studio和YOLO识别验证码" />
      </Head>
      <UseLabelStudioAndYOLOToIdentifyVerificationCodes />
    </Fragment>
  );
}