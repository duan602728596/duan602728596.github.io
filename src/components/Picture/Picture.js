import PropTypes from 'prop-types';

/**
 * 展示不同的图片
 * @param { string } props.className - 样式
 * @param { string } props.imageClassName - picture内img的样式
 * @param { string } props.avifSrc - avif的地址
 * @param { string } props.webpSrc - webp的地址
 * @param { string } props.src - 图片地址
 * @param { string } props.alt - alt属性
 */
function Picture(props) {
  const { className, imageClassName, avifSrc, webpSrc, src, alt } = props;

  return (
    <picture className={ className }>
      { avifSrc && <source srcSet={ avifSrc } type="image/avif" /> }
      { webpSrc && <source srcSet={ webpSrc } type="image/webp" /> }
      <img className={ imageClassName } src={ src } alt={ alt } />
    </picture>
  );
}

Picture.propTypes = {
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  avifSrc: PropTypes.string,
  webpSrc: PropTypes.string,
  src: PropTypes.string
};

export default Picture;