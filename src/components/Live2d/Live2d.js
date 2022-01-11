import { Fragment, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { SettingOutlined as IconSettingOutlined } from '@ant-design/icons';
import style from './live2d.module.sass';
import isMobile from '../../utils/isMobile';

/* 界面展示live2d */
function Live2d(props) {
  const canvasRef = useRef(null);

  // 切换舰娘
  async function handleSwitchClick(event) {
    const { switchModel } = await import('./live2dInit');

    switchModel();
  }

  // 初始化live2d
  async function live2d() {
    const { live2dInit } = await import('./live2dInit');

    live2dInit(canvasRef.current);
  }

  useEffect(function() {
    live2d();
  }, []);

  return (
    <Fragment>
      <div className={ style.root }>
        <canvas ref={ canvasRef } className="w-full h-full" width={ 230 } height={ 230 } />
        <Button className={ style.tapBtn }
          type="primary"
          size="small"
          icon={ <IconSettingOutlined /> }
          shape="circle"
          title="切换舰娘"
          onClick={ handleSwitchClick }
        />
      </div>
      { isMobile() ? <div className="h-[240px]" /> : null }
    </Fragment>
  );
}

export default Live2d;