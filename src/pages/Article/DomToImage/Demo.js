import { Fragment, useState } from 'react';
import { Typography, Empty, Button } from 'antd';
import { FileImageFilled as IconFileImageFilled } from '@ant-design/icons';
import style from './demo.sass';

const { Title, Paragraph } = Typography;
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
  const styleArr = [];

  for (const name of styleNames) {
    const fName = separatorToCamelNaming(name);
    let value = css[fName];

    if (fName === 'fontFamily') {
      value = value.replace(/"/g, '');
    }

    styleArr.push(`${ name }: ${ value };`);
  }

  return styleArr.join(' ');
}

/* dom转字符串 */
function html2Text(node) {
  let txt = '';

  if (node.nodeName !== '#text') {
    const nodeName = node.nodeName.toLowerCase();
    const styleStr = style2String(node, [
      'box-sizing', 'padding', 'margin', 'width', 'height', 'font-size', 'font-family',
      'border-radius', 'color', 'text-align', 'background-color'
    ]);

    txt += `<${ nodeName } style="${ styleStr }">`;

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

/* 代码演示 */
function Demo(props) {
  const [imgUrl, setImgUrl] = useState(undefined); // 图片地址

  // 生成图片
  function handleToImageClick(event) {
    const toImageText = document.getElementById('toImageText');
    const html = `<svg xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">${ html2Text(toImageText) }</div>
  </foreignObject>
</svg>`;

    const svg = new Blob(html.split(''), {
      type: 'image/svg+xml;charset=utf-8'
    });

    setImgUrl(window.URL.createObjectURL(svg));
  }

  return (
    <Fragment>
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>这是一段古诗，准备转换成图片。</Paragraph>
      <Paragraph className={ style.text } id="toImageText">
        <Title className={ style.textTitle } level={ 3 }>八阵图</Title>
        <Title className={ style.textTitle2 } level={ 4 }>[唐] 杜甫</Title>
        <p>功盖三分国，名成八阵图。</p>
        <p>江流石不转，遗恨失吞吴。</p>
      </Paragraph>
      <div className={ style.tools }>
        <Button type="primary" icon={ <IconFileImageFilled /> } onClick={ handleToImageClick }>生成图片</Button>
      </div>
      <div>
        {
          imgUrl
            ? <img className={ style.image } src={ imgUrl } />
            : <Empty description="图片预览" />
        }
      </div>
    </Fragment>
  );
}

export default Demo;