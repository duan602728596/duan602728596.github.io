import React from 'react';
import Link from 'next/link';
import { List } from 'antd';

/* 列表配置 */
const links = [
  { href: '/article/queue-in-js', title: '用JS实现多个任务并行执行的队列' },
  { href: '/article/js-copy', title: 'Javascript实现复制功能' }
];

/* 文章链接列表 */
function ArticleLinks(props) {
  // 渲染列表
  function linksRender() {
    return links.map((item, index) => {
      return (
        <List.Item key={ item.href }>
          <Link href={ item.href }>
            <a>{ item.title }</a>
          </Link>
        </List.Item>
      );
    });
  }

  return <List bordered={ true }>{ linksRender() }</List>;
}

export default ArticleLinks;