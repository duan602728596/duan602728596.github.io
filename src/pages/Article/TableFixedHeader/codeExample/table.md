<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    .layout {
      width: 300px;
      height: 130px;
      overflow: auto;
    }

    .table {
      width: 100%;
      border-left: 1px solid #1890ff;
      border-collapse: separate; /* 保证设置了translate3d后，td的border不会消失 */
      border-spacing: 0;
    }

    .table th, .table td {
      border-right: 1px solid #1890ff;
      border-bottom: 1px solid #1890ff;
      padding: 5px 8px;
    }

    .table th {
      border-top: 1px solid #1890ff;
    }

    .thead {
      transform-style: preserve-3d;
    }

    .thead tr {
      background-color: #ffe58f;
      transform: translate3d(0, 0, 3px); /* z轴保证类似z-index的图层设置 */
    }
  </style>
</head>
<body>

<div class="layout" id="layout">
  <table class="table">
    <thead class="thead">
      <tr id="theadTr">
        <th>表头1</th>
        <th>表头2</th>
        <th>表头3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>数据1</td>
        <td>数据2</td>
        <td>数据3</td>
      </tr>
      <tr>
        <td>数据1</td>
        <td>数据2</td>
        <td>数据3</td>
      </tr>
      <tr>
        <td>数据1</td>
        <td>数据2</td>
        <td>数据3</td>
      </tr>
      <tr>
        <td>数据1</td>
        <td>数据2</td>
        <td>数据3</td>
      </tr>
      <tr>
        <td>数据1</td>
        <td>数据2</td>
        <td>数据3</td>
      </tr>
      <tr>
        <td>数据1</td>
        <td>数据2</td>
        <td>数据3</td>
      </tr>
      <tr>
        <td>数据1</td>
        <td>数据2</td>
        <td>数据3</td>
      </tr>
    </tbody>
  </table>
</div>

<script>
  const layout = document.getElementById('layout');
  const theadTr = document.getElementById('theadTr');

  function handleLayoutScroll(event) {
    theadTr.style.transform = `translate3d(0, ${ event.target.scrollTop }px, 3px)`;
  }

  layout.addEventListener('scroll', handleLayoutScroll, false);
</script>
</body>
</html>