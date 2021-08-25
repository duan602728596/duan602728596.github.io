import { Fragment } from 'react';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import Article from './Article';

/* 在TextField中实现复杂的样式 */
function ComplexStyleInTextField() {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Article />
      </Main>
    </Fragment>
  );
}

export default ComplexStyleInTextField;