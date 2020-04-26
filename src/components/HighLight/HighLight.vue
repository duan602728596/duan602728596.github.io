<template>
  <!-- 代码高亮 -->
  <pre ref="codeBlockRef" :class="type"><code><slot></slot></code></pre>
</template>

<script>
  import { defineComponent, onMounted } from '@vue/composition-api';
  import hljs from 'highlight.js/lib/highlight';
  import javascript from 'highlight.js/lib/languages/javascript';
  import typescript from 'highlight.js/lib/languages/typescript';
  import xml from 'highlight.js/lib/languages/xml';
  import css from 'highlight.js/lib/languages/css';

  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('css', css);

  export default defineComponent({
    props: {
      type: String
    },
    setup(props, { refs }) {
      onMounted(function() {
        hljs.highlightBlock(refs.codeBlockRef);
      });
    }
  });
</script>