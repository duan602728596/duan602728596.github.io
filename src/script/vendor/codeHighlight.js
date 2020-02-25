import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

/* 代码高亮 */
function codeHighlight(len) {
  for (let i = 0; i < len; i++) {
    hljs.highlightBlock(document.getElementById(`code-block-${ i }`));
  }
}

export default codeHighlight;