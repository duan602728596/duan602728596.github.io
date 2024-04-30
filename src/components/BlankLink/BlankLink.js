/* 新标签页打开链接 */
function BlankLink(props) {
  const { href, className, children } = props;

  return <a className={ className } href={ href } target="_blank" rel="noopener noreferrer">{ children }</a>;
}

export default BlankLink;