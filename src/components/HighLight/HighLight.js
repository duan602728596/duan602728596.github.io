import { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import style from './highLight.sass';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

/* 代码高亮 */
function HighLight(props) {
  const codeRef = useRef(null);

  useEffect(function() {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/styles/github-gist.css" />
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