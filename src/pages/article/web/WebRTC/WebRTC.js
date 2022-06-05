import { Typography, Alert } from 'antd';
import style from './webRTC.module.sass';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';

const { Title, Paragraph, Text } = Typography;

/* 在浏览器中触发事件 */
function WebRTC(props) {
  return (
    <ArticleLayout>
      <Title>浏览器中使用WebRTC进行通信</Title>
      <Paragraph>
        在浏览器中，可以通过WebRTC进行点对点的连接，实现视频流或音频流或者其他任意数据的传输，而无需通过服务器。
        两个设备之间建立WebRTC连接需要一个信令服务器，来实现双方通过网络进行连接。
      </Paragraph>
      <Title level={ 2 }>WebRTC相关的协议</Title>
      <Paragraph>
        访问
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols"
          target="_blank"
          rel="noopener noreferrer"
        >
          《WebRTC协议介绍(MDN)》
        </a>
        阅读WebRTC API构建的协议。
      </Paragraph>
      <Title level={ 2 }>WebRTC的创建流程</Title>
      <Paragraph>
        通过<Text className="inline-block" code={ true }>RTCPeerConnection</Text>
        创建实例后， 按下面这个流程图展示一个完成的连接过程和所用的API。
      </Paragraph>
      <div className={ style.iframeBox }>
        {/**
          * 编辑地址：https://www.yuque.com/bbkkbkk/github/bkszne
          * 参考文档：https://www.yuque.com/yuque/developer/embed
          */}
        <iframe className={ style.iframe }
          src="https://www.yuque.com/bbkkbkk/github/bkszne?view=doc_embed&from=duan602728596"
          name="webrtc-flow-chart"
          referrerPolicy="no-referrer"
        />
      </div>
      <Title level={ 2 }>代码实现</Title>
      <Paragraph>
        基于WebRTC的简易的聊天室。用WebRTC实现的屏幕共享和摄像头传输。
        <br />项目地址：
        <a href="https://github.com/duan602728596/webrtc-demo" target="_blank" rel="noopener noreferrer">
          https://github.com/duan602728596/webrtc-demo
        </a>
      </Paragraph>
      <Alert type="info"
        message={ [
          '参考地址：',
          <div key="WebRTC_API">
            WebRTC_API：
            <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API" target="_blank" rel="noopener noreferrer">
              https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API
            </a>
          </div>,
          <div key="STUN+TURN-servers-list">
            STUN+TURN servers list：
            <a href="https://gist.github.com/yetithefoot/7592580" target="_blank" rel="noopener noreferrer">
              https://gist.github.com/yetithefoot/7592580
            </a>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default WebRTC;