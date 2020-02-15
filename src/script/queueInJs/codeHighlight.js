import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

/* 代码高亮 */
function codeHighlight() {
  hljs.highlightBlock(document.getElementById('code-block-0'));
  hljs.highlightBlock(document.getElementById('code-block-1'));
  hljs.highlightBlock(document.getElementById('code-block-2'));
}

export default codeHighlight;