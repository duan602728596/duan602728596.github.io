import { Fragment, useEffect, useRef } from 'react';
import { Button, Tooltip } from 'antd';
import { SettingOutlined as IconSettingOutlined } from '@ant-design/icons';
import style from './live2d.sass';

/* 判断是否为移动端 */
function isMobile() {
  if (typeof window === 'object') {
    const ua = window.navigator.userAgent;

    return /iphone|ipad|ipod|ios|android/i.test(ua);
  } else {
    return false;
  }
}

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
        <canvas ref={ canvasRef } className={ style.canvas } width={ 230 } height={ 230 } />
        <Tooltip title="切换舰娘" placement="right">
          <Button className={ style.tapBtn }
            type="primary"
            size="small"
            icon={ <IconSettingOutlined /> }
            shape="circle"
            onClick={ handleSwitchClick }
          />
        </Tooltip>
      </div>
      { isMobile() ? <div className={ style.mobileSpace } /> : null }
    </Fragment>
  );
}

export default Live2d;