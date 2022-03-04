import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import ScreenSharingTest from './ScreenSharingTest/ScreenSharingTest';
import ScreenSharingExample from './codeExample/screenSharing.mdx';

const { Title, Paragraph, Text } = Typography;

/* 浏览器中实现屏幕共享功能 */
function BrowserScreenSharing(props) {
  return (
    <ArticleLayout>
      <Title>浏览器中实现屏幕共享功能</Title>
      <Paragraph>
        在面试中，会出现一个经常用到的功能，就是在浏览器中实现屏幕共享。该功能使用了
        <Text>navigator.mediaDevices.getDisplayMedia</Text>API。
      </Paragraph>
      <Title level={ 2 }>基本代码</Title>
      <ScreenSharingExample />
      <Title level={ 2 }>实现效果</Title>
      <div className="mb-[16px]">
        <ScreenSharingTest />
      </div>
      <Alert type="info" message={ [
        '参考地址：',
        <div key="using-screencapture">
          使用屏幕捕获API：
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture" target="_blank" rel="noopener noreferrer">
            https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
          </a>
        </div>,
        <div key="getDisplayMedia">
          MediaDevices.getDisplayMedia()：
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia" target="_blank" rel="noopener noreferrer">
            https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
          </a>
        </div>,
        <div key="MediaStream">
          MediaStream：
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaStream" target="_blank" rel="noopener noreferrer">
            https://developer.mozilla.org/en-US/docs/Web/API/MediaStream
          </a>
        </div>,
        <div key="Signaling-and-video-calling">
          信令与视频通话：
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling">
            https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling
          </a>
        </div>
      ] } />
    </ArticleLayout>
  );
}

export default BrowserScreenSharing;