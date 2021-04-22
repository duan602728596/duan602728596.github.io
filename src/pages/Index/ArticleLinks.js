import { List } from 'antd';
import style from './articleLinks.sass';
import link from './link.json';

/* 文章链接列表 */
function ArticleLinks(props) {
  // 渲染列表
  function linksRender() {
    return link.navLink.map((item, index) => {
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