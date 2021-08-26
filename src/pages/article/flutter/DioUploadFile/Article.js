import { Fragment } from 'react';
import { Typography, Tag } from 'antd';
import style from './article.sass';
import HighLight from '../../../../components/HighLight/HighLight';
import uploadFileExample from './codeExample/uploadFile.md';

const { Title, Paragraph } = Typography;

/* 文章 */
function Article(props) {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Article;