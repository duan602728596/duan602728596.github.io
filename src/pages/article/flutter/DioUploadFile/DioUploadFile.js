import { Fragment } from 'react';
import Nav from '../../../../components/Nav/Nav';
import Main from '../../../../components/Main/Main';
import Article from './Article';

/* 使用dio上传文件 */
function DioUploadFile() {
  return (
    <Fragment>
      <Nav />
      <Main goToTop={ true }>
        <Article />
      </Main>
    </Fragment>
  );
}

export default DioUploadFile;