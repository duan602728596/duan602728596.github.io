import $ from 'jquery';

const tags = ['br', 'hr', 'img', 'input', 'param', 'meta', 'link'];
const $btnToImage = $('#btn-to-image'),
  $btnReset = $('#btn-reset'),
  $text = $('#text'),
  $imagePreview = $('#image-preview'),
  $info = $('#info');

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

/* 生成图片 */
function handleToImageClick(event) {
  const html = `<svg xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">${ html2Text($text[0]) }</div>
    </foreignObject>
  </svg>`;

  const svg = new Blob(html.split(''), {
    type: 'image/svg+xml;charset=utf-8'
  });
  const url = window.URL.createObjectURL(svg);

  $info.addClass('d-none');
  $btnToImage.addClass('d-none');
  $btnReset.removeClass('d-none');
  $imagePreview.append(`<img id="to-image-result" src="${ url }" width="798" height="179">`);
}

/* 重置任务 */
function handleResetClick(event) {
  $info.removeClass('d-none');
  $btnToImage.removeClass('d-none');
  $btnReset.addClass('d-none');
  $('#to-image-result').remove();
}

function init() {
  $btnToImage.on('click', handleToImageClick);
  $btnReset.on('click', handleResetClick);
}

init();