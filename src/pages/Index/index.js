import PropTypes from 'prop-types';
import ArticleLinks from './ArticleLinks';
import Main from '../../components/Main/Main';
import linkArticles from './link/articles.json' with { type: 'json' };
import linkFavorites from './link/favorites.json' with { type: 'json' };

const linkObject = {
  articles: linkArticles.data,
  favorites: linkFavorites.data.map((o) => Object.assign(o, {
    children: o.children.map((p) => Object.assign(p, { blank: true }))
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
    <Main goToTop={ true }>
      { articlesRender() }
    </Main>
  );
}

Index.propTypes = {
  type: PropTypes.string
};

export default Index;