import { Fragment } from 'react';
import PropTypes from 'prop-types';
import ArticleLinks from './ArticleLinks';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';
import linkArticles from './link/articles.json' assert { type: 'json' };
import linkFavorites from './link/favorites.json' assert { type: 'json' };

const linkObject = {
  articles: linkArticles.data,
  favorites: linkFavorites.data.map((o) => Object.assign(o, {
    blank: true
  }))
};

/**
 * 首页
 * @param { 'articles' | 'favorites' } props.type: 文章类型
 */
function Index(props) {
  const { type = 'articles' } = props;

  // 渲染文章列表
  function articlesRender() {
    return linkObject[type].map((item, index) => {
      return [
        <h1 key={ `${ item.title }-title` } className="text-[18px]">{ item.title }</h1>,
        <ArticleLinks key={ `${ item.title }-article` } data={ item.children } />
      ];
    });
  }

  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        { type === 'favorites' ? <ArticleLinks data={ linkObject[type] } /> : articlesRender() }
      </Main>
    </Fragment>
  );
}

Index.propTypes = {
  type: PropTypes.string
};

export default Index;