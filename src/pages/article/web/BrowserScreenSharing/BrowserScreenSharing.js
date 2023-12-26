import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import BlankLink from '../../../../components/BlankLink/BlankLink';
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
        <Text code={ true }>navigator.mediaDevices.getDisplayMedia</Text>API。
      </Paragraph>
      <Title level={ 2 }>基本代码</Title>
      <Paragraph>
        使用<Text code={ true }>navigator.mediaDevices.getDisplayMedia</Text>录制，并放到video中。
      </Paragraph>
      <ScreenSharingExample />
      <Title level={ 2 }>实现效果：屏幕共享并放到video中</Title>
      <div className="mb-[16px]">
        <ScreenSharingTest />
      </div>
      <Alert type="info" message={ [
        <h2 key="cankaodizhi" className="mb-0 py-[8px] text-[16px]">参考地址：</h2>,
        <div key="using-screencapture" className="py-[8px]">
          使用屏幕捕获API：
          <BlankLink href="https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture">
            https://developer.mozilla.org/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
          </BlankLink>
        </div>,
        <div key="getDisplayMedia" className="py-[8px]">
          MediaDevices.getDisplayMedia()：
          <BlankLink href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia">
            https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
          </BlankLink>
        </div>,
        <div key="MediaStream" className="py-[8px]">
          MediaStream：
          <BlankLink href="https://developer.mozilla.org/en-US/docs/Web/API/MediaStream">
            https://developer.mozilla.org/en-US/docs/Web/API/MediaStream
          </BlankLink>
        </div>,
        <div key="Signaling-and-video-calling" className="py-[8px]">
          信令与视频通话：
          <BlankLink href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling">
            https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling
          </BlankLink>
        </div>
      ] } />
    </ArticleLayout>
  );
}

export default BrowserScreenSharing;