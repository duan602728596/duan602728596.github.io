<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    .btn {
      padding: 0;
      width: 120px;
      height: 50px;
      font-size: 26px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }

    .space {
      width: 100%;
      height: 100%;
    }

    .btn-text {
      pointer-events: none;
    }

    .svg {
      display: block;
    }
  </style>
</head>
<body>
<button class="btn" type="button">
  <svg class="space svg" id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <!-- 过渡动画模板1，过渡动画 -->
    <linearGradient id="linear_gradient_0" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0" stop-color="#13f5ff">
        <animate attributeName="stop-color"
          from="#13f5ff"
          to="#fff713"
          dur=".3s"
          repeatCount="1"
          fill="freeze"
          begin="svg.mouseover"
        />
      </stop>
      <stop offset="100%" stop-color="#0017c0">
        <animate attributeName="stop-color"
          from="#0017c0"
          to="#ff0005"
          dur=".3s"
          repeatCount="1"
          fill="freeze"
          begin="svg.mouseover"
        />
      </stop>
    </linearGradient>

    <!-- 过渡动画模板2，还原动画 -->
    <linearGradient id="linear_gradient_1" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0" stop-color="#fff713">
        <animate attributeName="stop-color"
          from="#fff713"
          to="#13f5ff"
          dur=".3s"
          repeatCount="1"
          fill="freeze"
          begin="svg.mouseout"
        />
      </stop>
      <stop offset="100%" stop-color="#ff0005">
        <animate attributeName="stop-color"
          from="#ff0005"
          to="#0017c0"
          dur=".3s"
          repeatCount="1"
          fill="freeze"
          begin="svg.mouseout"
        />
      </stop>
    </linearGradient>

    <!-- 文字动画1 -->
    <linearGradient id="linear_gradient_2" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0" stop-color="#ff00ff">
        <animate attributeName="stop-color"
          from="#ff00ff"
          to="#4dff27"
          dur=".3s"
          repeatCount="1"
          fill="freeze"
          begin="svg.mouseover"
        />
      </stop>
      <stop offset="100%" stop-color="#f9ff7c">
        <animate attributeName="stop-color"
          from="#f9ff7c"
          to="#b29fff"
          dur=".3s"
          repeatCount="1"
          fill="freeze"
          begin="svg.mouseover"
        />
      </stop>
    </linearGradient>

    <!-- 文字动画2，还原动画 -->
    <linearGradient id="linear_gradient_3" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0" stop-color="#4dff27">
        <animate attributeName="stop-color"
          from="#4dff27"
          to="#ff00ff"
          dur=".3s"
          repeatCount="1"
          fill="freeze"
          begin="svg.mouseout"
        />
      </stop>
      <stop offset="100%" stop-color="#b29fff">
        <animate attributeName="stop-color"
          from="#b29fff"
          to="#f9ff7c"
          dur=".3s"
          repeatCount="1"
          fill="freeze"
          begin="svg.mouseout"
        />
      </stop>
    </linearGradient>

    <g>
      <rect class="space" id="background-rect" fill="url(#linear_gradient_0)" />
      <text class="btn-text"
        id="background-text"
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="url(#linear_gradient_2)"
      >
        Button
      </text>
    </g>

    <!-- 脚本 -->
    <script type="text/javascript">
      <![CDATA[
      const svg = document.getElementById('svg'),
        rect = document.getElementById('background-rect'),
        text = document.getElementById('background-text');

      // 鼠标移入时
      function handleBackgroundMouseOver(event) {
        // 使用setTimeout防止动画闪烁
        setTimeout(function() {
          rect.setAttribute('fill', 'url(#linear_gradient_0)');
          text.setAttribute('fill', 'url(#linear_gradient_2)');
        }, 0);
      }

      // 鼠标移出时
      function handleBackgroundMouseOut(event) {
        // 使用setTimeout防止动画闪烁
        setTimeout(function() {
          rect.setAttribute('fill', 'url(#linear_gradient_1)');
          text.setAttribute('fill', 'url(#linear_gradient_3)');
        }, 0);
      }

      svg.addEventListener('mouseover', handleBackgroundMouseOver, false);
      svg.addEventListener('mouseout', handleBackgroundMouseOut, false);
      // ]]>
    </script>
  </svg>
</button>
</body>
</html>