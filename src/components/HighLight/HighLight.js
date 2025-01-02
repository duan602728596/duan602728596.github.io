import { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import dart from 'highlight.js/lib/languages/dart';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import yaml from 'highlight.js/lib/languages/yaml';
import ini from 'highlight.js/lib/languages/ini';
import style from './highLight.module.sass';
import graphql from './languages/graphql';

hljs.configure({ ignoreUnescapedHTML: true });
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('dart', dart);
hljs.registerLanguage('graphql', graphql);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('python', python);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('toml', ini);
hljs.registerLanguage('ini', ini);

/**
 * 代码高亮组件
 * @param { string } props.type - 语言类型
 * @param { React.ReactNode } props.children - 代码
 */
function HighLight(props) {
  const codeRef = useRef(null);

  useEffect(function() {
    if (props.type !== 'text') {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <div className={ style.highLight }>
      <pre ref={ codeRef } className={ props?.type }>
        <code>{ props?.children }</code>
      </pre>
    </div>
  );
}

export default HighLight;