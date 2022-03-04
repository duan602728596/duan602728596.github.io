import { useLayoutEffect, useRef } from 'react';
import { Button, Space, message, Card } from 'antd';
import style from './screenSharingTest.module.sass';

/* 屏幕共享的测试 */
function ScreenSharingTest(props) {
  const videoRef = useRef(null);

  // 结束屏幕共享
  function stopScreenSharing() {
    if (videoRef?.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();

      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }

  // 点击结束屏幕共享
  function handleStopScreenSharingClick(event) {
    stopScreenSharing();
  }

  // 点击开始录制屏幕
  async function handleStartScreenSharingClick(event) {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: 'always' },
        audio: false
      });

      stream.addEventListener('inactive', function() {
        stopScreenSharing();
      });

      if ('srcObject' in videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } else {
        videoRef.current.src = window.URL.createObjectURL(stream);
      }
    } catch (err) {
      console.error(err);
      message.error('屏幕共享失败！');
    }
  }

  useLayoutEffect(function() {
    return function() {
      stopScreenSharing();
    };
  }, []);

  return (
    <Card title="屏幕共享" extra={
      <Space>
        <Button type="primary" onClick={ handleStartScreenSharingClick }>开始屏幕共享</Button>
        <Button type="primary" danger={ true } onClick={ handleStopScreenSharingClick }>结束屏幕共享</Button>
      </Space>
    }>
      <video ref={ videoRef } className={ style.video } />
    </Card>
  );
}

export default ScreenSharingTest;