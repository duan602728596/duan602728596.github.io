import { Typography, Alert } from 'antd';
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
      <Alert type="info"
        message={ [
          <b key="cankaodizhi" className="block py-[8px]">参考地址：</b>,
          <div key="getting-started-with-the-file-system-access-api" className="py-[8px]">
            Getting Started With the File System Access API：
            <a href="https://css-tricks.com/getting-started-with-the-file-system-access-api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://css-tricks.com/getting-started-with-the-file-system-access-api/
            </a>
          </div>,
          <div key="file" className="py-[8px]">
            File_System_Access_API：
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
            </a>
          </div>,
          <div key="fileAPI" className="py-[8px]">
            FileAPI：
            <a href="https://w3c.github.io/FileAPI/" target="_blank" rel="noopener noreferrer">
              https://w3c.github.io/FileAPI/
            </a>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default FileSystemAccessApi;