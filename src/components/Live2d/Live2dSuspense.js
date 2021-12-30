import dynamic from 'next/dynamic';

const Live2d = dynamic(() => import('./Live2d'), { ssr: false });

/* 异步加载live2d模块 */
function Live2dSuspense(props) {
  return <Live2d />;
}

export default Live2dSuspense;