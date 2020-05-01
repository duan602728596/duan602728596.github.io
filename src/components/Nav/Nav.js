import React from 'react';
import { Layout } from 'antd';
import style from './nav.sass';

/* 导航地址 */
const navs = [
  { href: '/', title: '文章' },
  { href: '/project', title: '开源项目' }
];

/* 网站导航 */
function Nav(props) {
  // 渲染导航
  function navsRender() {
    return navs.map((item, index) => {
      return (
        <li key={ item.href } className={ style.navListItem }>
          <a href={ item.href }>{ item.title }</a>
        </li>
      );
    });
  }

  return (
    <Layout.Header className={ style.antdHeader }>
      <div className={ style.header }>
        <nav className={ style.headerLeft }>
          <ul className={ style.navList }>{ navsRender() }</ul>
        </nav>
        <div className={ style.headerRight }>
          <a className={ style.githubLink }
            href="https://github.com/duan602728596"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={ style.githubImage } src="/images/github.png" alt="github" />
          </a>
        </div>
      </div>
    </Layout.Header>
  );
}

export default Nav;