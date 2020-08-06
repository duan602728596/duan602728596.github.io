import React, { Fragment } from 'react';
import ArticleLinks from './ArticleLinks';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';

/* 首页 */
function Index(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <ArticleLinks />
      </Main>
    </Fragment>
  );
}

export default Index;