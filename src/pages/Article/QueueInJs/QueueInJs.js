import { Fragment } from 'react';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import Article from './Article';

/* 用JS实现多个任务并行执行的队列 */
function QueueInJs(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Article />
      </Main>
    </Fragment>
  );
}

export default QueueInJs;