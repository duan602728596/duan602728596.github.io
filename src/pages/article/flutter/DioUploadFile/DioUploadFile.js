import { Tag, Typography } from 'antd';
import style from './dioUploadFile.module.sass';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import BlankLink from '../../../../components/BlankLink/BlankLink';
import UploadFileExample from './codeExample/uploadFile.mdx';

const { Title, Paragraph } = Typography;

/* 使用dio上传文件 */
function DioUploadFile() {
  return (
    <ArticleLayout>
      <Title>使用dio上传文件</Title>
      <Paragraph>
        在Flutter开发中，使用
        <BlankLink href="https://github.com/flutterchina/dio">dio</BlankLink>
        实现上传文件的功能：
      </Paragraph>
      <UploadFileExample />
      <Paragraph>
        由于dio会将请求转换成
        <Tag className={ style.tag }>String</Tag>类型，所以需要将
        <Tag className={ style.tag }>Uint8List</Tag>类型转换成
        <Tag className={ style.tag }>Stream&lt;List&lt;int&gt;&gt;</Tag>
        类型。具体请参考dio的
        <BlankLink href="https://github.com/flutterchina/dio/issues/485#issuecomment-552845924">issues</BlankLink>
        ，这块算是一个小坑吧。
      </Paragraph>
    </ArticleLayout>
  );
}

export default DioUploadFile;