import type { FunctionComponent, ComponentClass } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

interface CreateLegacyRoot {
  render(props: any): void;
  unmount(): void;
}

type LegacyReturn = (container: HTMLElement) => CreateLegacyRoot;

/**
 * 创建一个createLegacyRoot函数，保证组件能够兼容多个react版本
 * @param { FunctionComponent | ComponentClass } Component: 组件
 */
function legacy(Component: FunctionComponent | ComponentClass): LegacyReturn {
  return function createLegacyRoot(container: HTMLElement): CreateLegacyRoot {
    return {
      render(props: any): void {
        render(<Component { ...props } />, container);
      },
      unmount(): void {
        unmountComponentAtNode(container);
      }
    };
  };
}

export default legacy;