import { Fragment } from 'react';
import Nav from '../../../components/Nav/Nav';
import Main from '../../../components/Main/Main';
import Article from './Article';

/* css让图片自适应居中 */
function CSSImageCentered(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Article />
      </Main>
    </Fragment>
  );
}

export default CSSImageCentered;