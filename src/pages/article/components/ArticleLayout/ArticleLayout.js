import { Typography } from 'antd';
import Main from '../../../../components/Main/Main';

/* 文章页布局 */
function ArticleLayout(props) {
  return (
    <Main goToTop={ true } goBack={ true }>
      <Typography>{ props.children }</Typography>
    </Main>
  );
}

export default ArticleLayout;