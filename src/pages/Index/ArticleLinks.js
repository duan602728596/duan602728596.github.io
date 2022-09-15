import PropTypes from 'prop-types';
import Link from 'next/link';
import { List } from 'antd';
import classNames from 'classnames';
import style from './articleLinks.module.sass';

/* 文章链接列表 */
function ArticleLinks(props) {
  const { data } = props;

  // 渲染列表
  function linksRender() {
    return data.map((item, index) => {
      return (
        <List.Item key={ item.href } className={ classNames(style.listItem, item.blank ? style.blank : undefined) }>
          {
            item.blank
              ? <a className={ style.link } href={ item.href } target="_blank" rel="noopener noreferrer">{ item.title }</a>
              : <Link className={ style.link } href={ item.href }>{ item.title }</Link>
          }
        </List.Item>
      );
    });
  }

  return <List className={ style.list } size="small" bordered={ true }>{ linksRender() }</List>;
}

ArticleLinks.propTypes = {
  data: PropTypes.array
};

export default ArticleLinks;