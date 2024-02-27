import Link from 'next/link';
import { Space } from 'antd';
import style from './nav.module.sass';
import SwitchAddress from './SwitchAddress';
import Picture from '../Picture/Picture';
import BlankLink from '../BlankLink/BlankLink';

/* 导航地址 */
const navs = [
  { href: '/', title: '文章' },
  { href: '/favorites', title: '收藏夹' },
  { href: '/project', title: '开源项目' },
  { href: '/friends', title: '友情链接' }
];

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
  return (
    <div className={ style.antdHeader }>
      <div className={ style.header }>
        <nav className={ style.headerLeft }>
          <ul className={ style.navList }>{ navsRender }</ul>
        </nav>
        <div className={ style.headerRight }>
          <Space size={ 16 }>
            <SwitchAddress />
            <BlankLink className={ style.githubLink } href="https://github.com/duan602728596">
              <Picture className="block w-full h-full"
                imageClassName="block w-full h-full"
                avifSrc="/images/github.avif"
                webpSrc="/images/github.webp"
                src="/images/github.png"
                alt="github"
              />
            </BlankLink>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Nav;