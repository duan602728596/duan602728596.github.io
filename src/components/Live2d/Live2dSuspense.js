import { lazy, Suspense } from 'react';

const Live2d = lazy(() => import('./Live2d'));

/* 异步加载live2d模块 */
function Live2dSuspense(props) {
  return (
    <Suspense fallback={ null }>
      <Live2d />
    </Suspense>
  );
}

export default Live2dSuspense;