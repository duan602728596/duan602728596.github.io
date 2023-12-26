import propTypes from 'prop-types';

/* 新标签页打开链接 */
function BlankLink(props) {
  const { href, children } = props;

  return <a href={ href } target="_blank" rel="noopener noreferrer">{ children }</a>;
}

BlankLink.propTypes = {
  href: propTypes.string.isRequired,
  children: propTypes.node.isRequired
};

export default BlankLink;