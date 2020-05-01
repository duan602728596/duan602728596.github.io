import React from 'react';
import { List } from 'antd';
import style from './articleLinks.sass';

/* 列表配置 */
const links = [
  { href: '/article/queue-in-js', title: '用JS实现多个任务并行执行的队列' },
  { href: '/article/js-copy', title: 'Javascript实现复制功能' },
  { href: '/article/dom-to-image', title: '用Javascript将DOM绘制成图片' },
  { href: '/article/solar-system', title: '基于Three.js + wasm开发的太阳系动画' },
  {
    href: 'https://blog.bitsrc.io/10-useful-web-apis-for-2020-8e43905cbdc5',
    title: '2020年10个有用的Web API (10-useful-web-apis-for-2020)',
    blank: true
  },
  { href: '/article/static-resource-in-typescript', title: '如何在typescript内引入静态资源' },
  { href: '/article/linear-gradient-animate', title: '使用SVG，让渐变的背景也能动起来' }
];

/* 文章链接列表 */
function ArticleLinks(props) {
  // 渲染列表
  function linksRender() {
    return links.map((item, index) => {
      return (
        <List.Item key={ item.href } className={ item.blank ? style.blank : undefined }>
          {
            item.blank ? (
              <a href={ item.href } target="_blank" rel="noopener noreferrer">{ item.title }</a>
            ) : (
              <a href={ item.href }>{ item.title }</a>
            )
          }
        </List.Item>
      );
    });
  }

  return <List bordered={ true }>{ linksRender() }</List>;
}

export default ArticleLinks;