import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { FloatButton, Button } from 'antd';
import { LeftOutlined as IconLeftOutlined, ToTopOutlined as IconToTopOutlined } from '@ant-design/icons';
import NoSSR from 'react-no-ssr';
import style from './main.module.sass';

const { BackTop } = FloatButton;

/**
 * 网站整体布局
 * @param { React.ReactNode } props.children - 子元素
 * @param { boolean } props.goToTop - 显示返回顶部
 * @param { boolean } props.goBack - 显示返回按钮
 */
function Main(props) {
  const router = useRouter();

  // 点击返回上一页
  function handleGoBackClick(event) {
    router.push('/');
  }

  function goToTopRender() {
    if (typeof document === 'object') {
      return createPortal(
        <BackTop type="primary" icon={ <IconToTopOutlined /> } title="返回顶部" tabIndex={ 0 } role="button" aria-label="返回顶部" />,
        document.body
      );
    } else {
      return null;
    }
  }

  return [
    <div key="main" className={ style.main }>
      {
        props.goBack ? (
          <div className="mb-[16px] text-right">
            <Button onClick={ handleGoBackClick }>
              <IconLeftOutlined className="mr-[6px]" />
              返回
            </Button>
          </div>
        ) : null
      }
      { props?.children }
    </div>,
    props?.goToTop ? (
      <NoSSR key="backTop">
        { goToTopRender() }
      </NoSSR>
    ) : null
  ];
}

Main.propTypes = {
  children: PropTypes.node,
  goToTop: PropTypes.bool,
  goBack: PropTypes.bool
};

export default Main;