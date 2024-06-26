import Main from '../../../../components/Main/Main';

/* 文章页布局 */
function ArticleLayout(props) {
  return <Main goToTop={ true } goBack={ true }>{ props.children }</Main>;
}

export default ArticleLayout;