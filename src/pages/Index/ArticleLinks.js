import PropTypes from 'prop-types';
import Link from 'next/link';
import { List } from 'antd';
import style from './articleLinks.module.sass';

/* 文章链接列表 */
function ArticleLinks(props) {
  const { data = [] } = props;

  // 渲染列表
  function linksRender(item) {
    return (
      <List.Item key={ item.href } className={ item.blank ? style.blank : undefined }>
        {
          item.blank
            ? <a className={ style.blankLink } href={ item.href } target="_blank" rel="noopener noreferrer">{ item.title }</a>
            : <Link className={ style.link } href={ item.href }>{ item.title }</Link>
        }
      </List.Item>
    );
  }

  return <List className={ style.list } size="small" dataSource={ data } renderItem={ linksRender } bordered={ true } />;
}

ArticleLinks.propTypes = {
  data: PropTypes.array
};

export default ArticleLinks;