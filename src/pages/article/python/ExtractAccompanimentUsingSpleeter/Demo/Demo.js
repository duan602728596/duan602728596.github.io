import { Fragment, useRef } from 'react';
import { Button } from 'antd';

/* 提取效果 */
function Demo(props) {
  const vocalsRef = useRef(null),
    accompanimentRef = useRef(null);

  // 同时播放
  function handlePlayClick(event) {
    if (vocalsRef.current && accompanimentRef.current) {
      vocalsRef.current.currentTime = accompanimentRef.current.currentTime = 0;
      vocalsRef.current.play();
      accompanimentRef.current.play();
    }
  }

  // 暂停
  function handlePauseClick(event) {
    if (vocalsRef.current && accompanimentRef.current) {
      vocalsRef.current.pause();
      accompanimentRef.current.pause();
    }
  }

  return (
    <Fragment>
      <h4>原版音乐：《I love you 私の君》</h4>
      <audio src="/media/extract-accompaniment-using-spleeter/1.mp4" controls={ true } />
      <h4 className="mt-[12px]">提取后的人声和伴奏</h4>
      <div>
        <span className="align-[21px]">人声：</span>
        <audio ref={ vocalsRef } src="/media/extract-accompaniment-using-spleeter/vocals.wav" controls={ true } />
      </div>
      <div>
        <span className="align-[21px]">伴奏：</span>
        <audio ref={ accompanimentRef } src="/media/extract-accompaniment-using-spleeter/accompaniment.wav"
          controls={ true } />
      </div>
      <Button.Group className="mt-[12px]">
        <Button type="primary" onClick={ handlePlayClick }>同时播放</Button>
        <Button onClick={ handlePauseClick }>暂停</Button>
      </Button.Group>
    </Fragment>
  );
}

export default Demo;