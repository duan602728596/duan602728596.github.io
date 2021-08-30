import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Nav from '../../../../components/Nav/Nav';
import Main from '../../../../components/Main/Main';

/* 文章页布局 */
function ArticleLayout(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>{ props.children }</Main>
    </Fragment>
  );
}

ArticleLayout.propTypes = {
  children: PropTypes.node
};

export default ArticleLayout;