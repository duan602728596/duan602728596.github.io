import { Fragment } from 'react';
import Nav from '../../../../components/Nav/Nav';
import Main from '../../../../components/Main/Main';
import Article from './Article';

/* 在flutter中获取图片的尺寸 */
function GetImageSize(props) {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Article />
      </Main>
    </Fragment>
  );
}

export default GetImageSize;