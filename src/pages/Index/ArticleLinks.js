import PropTypes from 'prop-types';
import { List } from 'antd';
import style from './articleLinks.module.sass';

/* 文章链接列表 */
function ArticleLinks(props) {
  const { data } = props;

  // 渲染列表
  function linksRender() {
    return data.map((item, index) => {
      return (
        <List.Item key={ item.href } className={ item.blank ? style.blank : undefined }>
          {
            item.blank
              ? <a href={ item.href } target="_blank" rel="noopener noreferrer">{ item.title }</a>
              : <a href={ item.href }>{ item.title }</a>
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