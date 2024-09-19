import { useState, useEffect, useRef } from 'react';
import { Button, Radio } from 'antd';
import Audio from './Audio';

const stereoPannerValueOptions = [
  { label: '左', value: 1 },
  { label: '中', value: 0 },
  { label: '右', value: -1 }
];

function Demo(props) {
  const [stereoPannerValue, setStereoPannerValue] = useState(0);
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const readerBufferRef = useRef(null);

  // 播放
  async function handlePlayClick(event) {
    audioRef.current = new Audio({ canvas: canvasRef.current, buffer: readerBufferRef.current });
    await audioRef.current.init();
    audioRef.current.start();
  }

  // 停止
  function handleStopClick(event) {
    if (audioRef.current) {
      audioRef.current.stop();
      audioRef.current = null;
    }
  }

  // 文件上传
  function handleFileChange(event) {
    handleStopClick();

    const file = event.target.files[0];
    const reader = new FileReader();

    function handleReaderLoad(e) {
      readerBufferRef.current = e.target.result;
    }

    reader.addEventListener('load', handleReaderLoad, { once: true });
    reader.readAsArrayBuffer(file);
  }

  // 修改声道
  function handleStereoPannerChange(event) {
    setStereoPannerValue(event.target.value);

    if (audioRef.current) audioRef.current.setStereoPannerValue(event.target.value);
  }

  useEffect(function() {
    return function() {
      readerBufferRef.current = null;
      audioRef?.current?.stop();
    };
  }, []);

  return (
    <div>
      <canvas ref={ canvasRef } className="block mx-auto mb-[8px] border border-black border-solid" width="512" height="256" />
      <input type="file" onInput={ handleFileChange } />
      <Button.Group className="ml-[8px]">
        <Button onClick={ handlePlayClick }>播放</Button>
        <Button type="primary" danger={ true } onClick={ handleStopClick }>停止</Button>
      </Button.Group>
      <Radio.Group className="ml-[8px]" options={ stereoPannerValueOptions } value={ stereoPannerValue } onChange={ handleStereoPannerChange } />
    </div>
  );
}

export default Demo;