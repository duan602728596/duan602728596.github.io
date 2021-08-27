import { Fragment } from 'react';
import { Tag, Typography } from 'antd';
import style from './dioUploadFile.sass';
import Nav from '../../../../components/Nav/Nav';
import Main from '../../../../components/Main/Main';
import HighLight from '../../../../components/HighLight/HighLight';
import uploadFileExample from './codeExample/uploadFile.md';

const { Title, Paragraph } = Typography;

/* 使用dio上传文件 */
function DioUploadFile() {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Title>使用dio上传文件</Title>
        <Paragraph>
          在Flutter开发中，使用
          <a href="https://github.com/flutterchina/dio" target="_blank" rel="noopener noreferrer">dio</a>
          实现上传文件的功能：
        </Paragraph>
        <HighLight type="dart">{ uploadFileExample }</HighLight>
        <Paragraph>
          由于dio会将请求转换成
          <Tag className={ style.tag }>String</Tag>类型，所以需要将
          <Tag className={ style.tag }>Uint8List</Tag>类型转换成
          <Tag className={ style.tag }>Stream&lt;List&lt;int&gt;&gt;</Tag>
          类型。具体请参考dio的
          <a href="https://github.com/flutterchina/dio/issues/485#issuecomment-552845924"
            target="_blank"
            rel="noopener noreferrer"
          >
            issues
          </a>，这块算是一个小坑吧。
        </Paragraph>
      </Main>
    </Fragment>
  );
}

export default DioUploadFile;