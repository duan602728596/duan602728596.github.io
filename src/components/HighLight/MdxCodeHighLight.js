import { useMemo } from 'react';
import HighLight from './HighLight';

/* 代码高亮组件，用于mdx */
function MdxCodeHighLight(props) {
  const { className, children } = props;
  const language = useMemo(function() {
    if (className) {
      return className.replace(/^language-/i, '');
    } else {
      return null;
    }
  }, [className]);

  return <HighLight type={ language ?? undefined } children={ children } />;
}

export default MdxCodeHighLight;