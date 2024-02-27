import { Tooltip } from 'antd';
import { InteractionOutlined as IconInteractionOutlined } from '@ant-design/icons';
import style from './nav.module.sass';

/* 域名 */
const domain = ['github.io', 'vercel.app'];

function SwitchAddress() {
  // 切换网站地址
  function handleSwitchAddressClick(event) {
    const { pathname, hostname } = window.location;
    const isGithub = /github\.io/.test(hostname);

    window.location.href = new URL(pathname, `https://duan602728596.${ domain[isGithub ? 1 : 0] }/`);
  }

  return (
    <Tooltip title="切换网站地址">
      <a className={ style.switchAddress }
        role="button"
        tabIndex={ 0 }
        aria-label="切换网站地址"
        onClick={ handleSwitchAddressClick }
      >
        <IconInteractionOutlined className={ style.switchAddressIcon } />
      </a>
    </Tooltip>
  );
}

export default SwitchAddress;