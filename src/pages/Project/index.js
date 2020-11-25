import { Fragment } from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';
import Project from './Project';

/* 开源项目 */
function Index(props) {
  return (
    <Fragment>
      <Nav />
      <Main>
        <Project />
      </Main>
    </Fragment>
  );
}

export default Index;