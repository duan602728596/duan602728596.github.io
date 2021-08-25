import { Fragment } from 'react';
import Nav from '../../../../components/Nav/Nav';
import Main from '../../../../components/Main/Main';
import Article from './Article';

/* dom绘制图片 */
function DomToImage(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Article />
      </Main>
    </Fragment>
  );
}

export default DomToImage;