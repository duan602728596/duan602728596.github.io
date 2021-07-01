import { Fragment } from 'react';
import PropTypes from 'prop-types';
import ArticleLinks from './ArticleLinks';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';
import link from './link.json';

const linkObject = {
  articles: link.articles,
  favorites: link.favorites.map((o) => Object.assign(o, {
    blank: true
  }))
};

/**
 * 首页
 * @param { 'articles' | 'favorites' } props.type: 文章类型
 */
function Index(props) {
  const { type = 'articles' } = props;

  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <ArticleLinks data={ linkObject[type] } />
      </Main>
    </Fragment>
  );
}

Index.propTypes = {
  type: PropTypes.string
};

export default Index;