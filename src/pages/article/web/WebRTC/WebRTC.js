import { Typography, Alert } from 'antd';
import style from './webRTC.module.sass';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import BlankLink from '../../../../components/BlankLink/BlankLink';

const { Title, Paragraph, Text } = Typography;

/* 浏览器中使用WebRTC进行通信 */
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
        <BlankLink href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols">《WebRTC协议介绍(MDN)》</BlankLink>
        阅读WebRTC API构建的协议。
      </Paragraph>
      <Title level={ 2 }>WebRTC的创建流程</Title>
      <Paragraph>
        通过<Text className="inline-block" code={ true }>RTCPeerConnection</Text>
        创建实例后， 按下面这个流程图展示一个完成的连接过程和所用的API。
      </Paragraph>
      <div className={ style.iframeBox }>
        {/**
          * 编辑地址：https://www.yuque.com/bbkkbkk/github/oss89z
          * 参考文档：https://www.yuque.com/yuque/developer/embed
          */}
        <iframe className={ style.iframe }
          src="https://www.yuque.com/bbkkbkk/github/oss89z?view=doc_embed&from=duan602728596"
          name="webrtc-flow-chart"
          title="webrtc流程图"
          referrerPolicy="no-referrer"
        />
      </div>
      <Title level={ 2 }>代码实现</Title>
      <Paragraph>
        基于WebRTC的简易的聊天室。用WebRTC实现的屏幕共享和摄像头传输。
        <br />项目地址：
        <BlankLink href="https://github.com/duan602728596/webrtc-demo">
          https://github.com/duan602728596/webrtc-demo
        </BlankLink>
      </Paragraph>
      <Alert type="info"
        message={ [
          <h2 key="cankaodizhi" className="mb-0 py-[8px] text-[16px]">参考地址：</h2>,
          <div key="WebRTC_API" className="py-[8px]">
            WebRTC_API：
            <BlankLink href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API">
              https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API
            </BlankLink>
          </div>,
          <div key="STUN+TURN-servers-list" className="py-[8px]">
            STUN+TURN servers list：
            <BlankLink href="https://gist.github.com/yetithefoot/7592580">
              https://gist.github.com/yetithefoot/7592580
            </BlankLink>
          </div>,
          <div key="WebRTC-stun-turn-servers-list" className="py-[8px]">
            WebRTC stun / turn server list：
            <BlankLink href="https://gist.github.com/sagivo/3a4b2f2c7ac6e1b5267c2f1f59ac6c6b">
              https://gist.github.com/sagivo/3a4b2f2c7ac6e1b5267c2f1f59ac6c6b
            </BlankLink>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default WebRTC;