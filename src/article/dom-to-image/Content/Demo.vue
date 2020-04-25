<template>
  <!-- 代码演示 -->
  <article class="articleParagraph">
    <h2 class="articleTitle2">代码演示</h2>
    <p>这是一段古诗，准备转换成图片。</p>
    <blockquote ref="copyText" class="p-3 blockquote shadow-none bg-light rounded">
      <h5 class="mb-3 text-primary">八阵图</h5>
      <h6 class="mb-2 text-secondary">[唐] 杜甫</h6>
      <p>功盖三分国，名成八阵图。</p>
      <p>江流石不转，遗恨失吞吴。</p>
    </blockquote>
    <div class="mb-3 text-right">
      <button class="btn btn-danger" type="button" @click="handleResetClick">重置任务</button>
      <button class="btn btn-primary" type="button" @click="handleToImageClick">生成图片</button>
    </div>
    <div class="border border-success">
      <img :src="imgUrl" width="798" height="179" v-if="imgUrl">
      <p class="p-5 text-center" v-else>图片预览</p>
    </div>
  </article>
</template>

<script>
  import { defineComponent, ref } from '@vue/composition-api';

  const tags = ['br', 'hr', 'img', 'input', 'param', 'meta', 'link'];

  /* 分隔符转驼峰命名法 */
  function separatorToCamelNaming(name) {
    const nameArr = name.split(/-/g);
    let newName = '';

    for (let i = 0, j = nameArr.length; i < j; i++) {
      const item = nameArr[i];

      if (i === 0) {
        newName += item;
      } else {
        newName += `${ item[0].toLocaleUpperCase() }${ item.substr(1) }`;
      }
    }

    return newName;
  }

  /* 将style转换成字符串 */
  function style2String(node, styleNames) {
    const css = window.getComputedStyle(node);
    const style = [];

    for (const name of styleNames) {
      const fName = separatorToCamelNaming(name);
      let value = css[fName];

      if (fName === 'fontFamily') {
        value = value.replace(/"/g, '');
      }

      style.push(`${ name }: ${ value };`);
    }

    return style.join(' ');
  }

  /* dom转字符串 */
  function html2Text(node) {
    let txt = '';

    if (node.nodeName !== '#text') {
      const nodeName = node.nodeName.toLowerCase();
      const style = style2String(node, [
        'padding', 'margin', 'width', 'height', 'font-size', 'font-family', 'border-radius', 'color',
        'text-align', 'background-color'
      ]);

      txt += `<${ nodeName } style="${ style }">`;

      if (!tags.includes(nodeName)) {
        // 子节点
        const childNodes = node.childNodes;

        for (let i = 0, j = childNodes.length; i < j; i++) {
          txt += html2Text(childNodes[i]);
        }

        txt += `</${ nodeName }>`;
      }
    } else {
      txt += node.data;
    }

    return txt;
  }

  export default defineComponent({
    name: 'Demo',
    setup(props, { refs }) {
      const imgUrl = ref(undefined); // 生成的图片地址

      // 生成图片
      function handleToImageClick() {
        const html = `<svg xmlns="http://www.w3.org/2000/svg">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">${ html2Text(refs.copyText) }</div>
          </foreignObject>
        </svg>`;

        const svg = new Blob(html.split(''), {
          type: 'image/svg+xml;charset=utf-8'
        });

        imgUrl.value = window.URL.createObjectURL(svg);
      }

      // 重置任务
      function handleResetClick() {
        imgUrl.value = undefined;
      }

      return { imgUrl, handleToImageClick, handleResetClick };
    }
  });
</script>

<style scoped>

</style>