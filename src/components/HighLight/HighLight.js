import { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import dart from 'highlight.js/lib/languages/dart';
import style from './highLight.module.sass';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('dart', dart);

/**
 * 代码高亮组件
 * @param { string } props.type: 语言类型
 * @param { React.ReactNode } props.children: 代码
 */
function HighLight(props) {
  const codeRef = useRef(null);

  useEffect(function() {
    if (props.type !== 'text') {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/styles/github.css" />
      </Head>
      <div className={ style.highLight }>
        <pre ref={ codeRef } className={ props?.type }>
          <code>{ props?.children }</code>
        </pre>
      </div>
    </Fragment>
  );
}

HighLight.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string
};

export default HighLight;