import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import Demo from './Demo/Demo';
import ReadFileExample from './codeExample/readFile.mdx';
import WriteFileExample from './codeExample/writeFile.mdx';

const { Title, Paragraph, Text } = Typography;

/* 文件系统API */
function FileSystemAccessApi(props) {
  return (
    <ArticleLayout>
      <Title>使用File System Access API访问文件</Title>
      <Paragraph>最新的File System Access API可以访问文件系统，完成文件的读取和保存。</Paragraph>
      <Paragraph>
        使用<Text code={ true }>window.showOpenFilePicker</Text>
        获取<Text code={ true }>fileHandle</Text>，完成文件的读取。
      </Paragraph>
      <ReadFileExample />
      <Paragraph>
        使用<Text code={ true }>window.showSaveFilePicker</Text>
        获取<Text code={ true }>handle</Text>，完成文件的保存。
      </Paragraph>
      <WriteFileExample />
      <Paragraph>这个Demo展示了如何加载图片和保存图片。</Paragraph>
      <Demo />
    </ArticleLayout>
  );
}

export default FileSystemAccessApi;