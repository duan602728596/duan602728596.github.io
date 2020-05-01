import React, { Fragment, useRef } from 'react';
import { Typography } from 'antd';
import style from './demo.sass';

const { Title, Paragraph } = Typography;

/* svg动画 */
function SvgAnimate(props) {
  const svgRef = useRef(null),
    rectRef = useRef(null),
    textRef = useRef(null);

  // 过渡动画状态
  const linearGradientStatus = [
    { from: '#13f5ff', to: '#fff713' },
    { from: '#0017c0', to: '#ff0005' }
  ];
  // 过渡文字状态
  const textColorStatus = [
    { from: '#ff00ff', to: '#4dff27' },
    { from: '#f9ff7c', to: '#b29fff' }
  ];
  const animateProps = {
    attributeName: 'stop-color',
    dur: '.3s',
    repeatCount: 1,
    fill: 'freeze'
  };

  // 鼠标移入时
  function handleBackgroundMouseOver(event) {
    // 使用setTimeout防止动画闪烁
    setTimeout(function() {
      rectRef.current.setAttribute('fill', 'url(#linear_gradient_0)');
      textRef.current.setAttribute('fill', 'url(#linear_gradient_2)');
    }, 0);
  }

  // 鼠标移出时
  function handleBackgroundMouseOut(event) {
    // 使用setTimeout防止动画闪烁
    setTimeout(function() {
      rectRef.current.setAttribute('fill', 'url(#linear_gradient_1)');
      textRef.current.setAttribute('fill', 'url(#linear_gradient_3)');
    }, 0);
  }

  return (
    <svg ref={ svgRef }
      className={ style.svg }
      id="svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      onMouseOver={ handleBackgroundMouseOver }
      onMouseOut={ handleBackgroundMouseOut }
    >
      {/* 过渡动画模板1，过渡动画 */}
      <linearGradient id="linear_gradient_0" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0" stopColor={ linearGradientStatus[0].from }>
          <animate begin="svg.mouseover" { ...linearGradientStatus[0] } { ...animateProps } />
        </stop>
        <stop offset="100%" stopColor={ linearGradientStatus[1].from }>
          <animate begin="svg.mouseover" { ...linearGradientStatus[1] } { ...animateProps } />
        </stop>
      </linearGradient>
      {/* 过渡动画模板2，还原动画 */}
      <linearGradient id="linear_gradient_1" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0" stopColor={ linearGradientStatus[0].to }>
          <animate begin="svg.mouseout"
            from={ linearGradientStatus[0].to }
            to={ linearGradientStatus[0].from }
            { ...animateProps }
          />
        </stop>
        <stop offset="100%" stopColor={ linearGradientStatus[1].to }>
          <animate begin="svg.mouseout"
            from={ linearGradientStatus[1].to }
            to={ linearGradientStatus[1].from }
            { ...animateProps }
          />
        </stop>
      </linearGradient>
      {/* 文字动画1 */}
      <linearGradient id="linear_gradient_2" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0" stopColor={ textColorStatus[0].from }>
          <animate begin="svg.mouseover" { ...textColorStatus[0] } { ...animateProps } />
        </stop>
        <stop offset="100%" stopColor={ textColorStatus[1].from }>
          <animate begin="svg.mouseover" { ...textColorStatus[1] } { ...animateProps } />
        </stop>
      </linearGradient>
      {/* 文字动画2，还原动画 */}
      <linearGradient id="linear_gradient_3" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0" stopColor={ textColorStatus[0].to }>
          <animate begin="svg.mouseout"
            from={ textColorStatus[0].to }
            to={ textColorStatus[0].from }
            { ...animateProps }
          />
        </stop>
        <stop offset="100%" stopColor={ textColorStatus[1].to }>
          <animate begin="svg.mouseout"
            from={ textColorStatus[1].to }
            to={ textColorStatus[1].from }
            { ...animateProps }
          />
        </stop>
      </linearGradient>
      {/* 文字 */}
      <g>
        <rect ref={ rectRef } className={ style.space } id="background-rect" fill="url(#linear_gradient_0)" />
        <text ref={ textRef }
          className={ style.buttonText }
          id="background-text"
          x="50%"
          y="50%"
          fill="url(#linear_gradient_2)"
        >
          Button
        </text>
      </g>
    </svg>
  );
}

/* 代码演示 */
function Demo(props) {
  return (
    <Fragment>
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>
        实现的效果：
        <button className={ style.button } type="button">
          {/* svg动画 */}
          <SvgAnimate />
        </button>
      </Paragraph>
    </Fragment>
  );
}

export default Demo;