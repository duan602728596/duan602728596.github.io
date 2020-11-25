import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { BackTop } from 'antd';
import NoSSR from 'react-no-ssr';
import style from './main.sass';

/* 网站整体布局 */
function Main(props) {
  function goToTopRender() {
    if (typeof document === 'object') {
      return createPortal(
        <BackTop title="返回顶部" role="button" aria-label="返回顶部">
          <div className={ style.goToTop }>UP</div>
        </BackTop>,
        document.body
      );
    } else {
      return null;
    }
  }

  return [
    <div key="main" className={ style.main }>{ props?.children }</div>,
    <NoSSR key="backTop">
      { props?.goToTop ? goToTopRender() : null }
    </NoSSR>
  ];
}

Main.propTypes = {
  children: PropTypes.node,
  goToTop: PropTypes.bool
};

export default Main;