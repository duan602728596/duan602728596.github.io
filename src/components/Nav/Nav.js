import Link from 'next/link';
import { Layout, Tooltip, Space } from 'antd';
import { InteractionOutlined as IconInteractionOutlined } from '@ant-design/icons';
import style from './nav.module.sass';
import Picture from '../Picture/Picture';

/* 导航地址 */
const navs = [
  { href: '/', title: '文章' },
  { href: '/favorites', title: '收藏夹' },
  { href: '/project', title: '开源项目' }
];
/* 域名 */
const domain = ['github.io', 'vercel.app'];

/* 渲染导航 */
const navsRender = navs.map((item, index) => {
  return (
    <li key={ item.href } className={ style.navListItem }>
      <Link href={ item.href }>{ item.title }</Link>
    </li>
  );
});

/* 网站导航 */
function Nav(props) {
  // 切换网站地址
  function handleSwitchAddressClick(event) {
    const { pathname, hostname } = window.location;
    const isGithub = /github\.io/.test(hostname);

    window.location.href = new URL(pathname, `https://duan602728596.${ domain[isGithub ? 1 : 0] }/`);
  }

  return (
    <Layout.Header className={ style.antdHeader }>
      <div className={ style.header }>
        <nav className={ style.headerLeft }>
          <ul className={ style.navList }>{ navsRender }</ul>
        </nav>
        <div className={ style.headerRight }>
          <Space size={ 16 }>
            <Tooltip title="切换网站地址">
              <a className={ style.switchAddress }
                role="button"
                aria-label="切换网站地址"
                onClick={ handleSwitchAddressClick }
              >
                <IconInteractionOutlined className={ style.switchAddressIcon } />
              </a>
            </Tooltip>
            <a className={ style.githubLink }
              href="https://github.com/duan602728596"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Picture className="block w-full h-full"
                imageClassName="block w-full h-full"
                avifSrc="/images/github.avif"
                webpSrc="/images/github.webp"
                src="/images/github.png"
              />
            </a>
          </Space>
        </div>
      </div>
    </Layout.Header>
  );
}

export default Nav;