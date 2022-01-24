import { Fragment, useState } from 'react';
import { Typography, Input, Button } from 'antd';

const { Title } = Typography;

function palindrome(str) {
  const palindromeIndex = [];
  const strLength = str.length;

  if (strLength < 3) {
    return palindromeIndex;
  }

  for (let i = 1; i < strLength - 1; i++) {
    // 奇数
    let startIndex = null, endIndex = null;

    for (let k = i - 1, m = i + 1; k >= 0 && m < strLength; k--, m++) {
      if (str[k] === str[m]) {
        [startIndex, endIndex] = [k, m];
      } else {
        break;
      }
    }

    if (startIndex !== null && endIndex !== null) {
      palindromeIndex.push([startIndex, endIndex]);
    }

    // 偶数
    [startIndex, endIndex] = [null, null];

    for (let p = i, t = i + 1; p >= 0 && t < strLength; p--, t++) {
      if (str[p] === str[t]) {
        [startIndex, endIndex] = [p, t];
      } else {
        break;
      }
    }

    if (startIndex !== null && endIndex !== null) {
      palindromeIndex.push([startIndex, endIndex]);
    }
  }

  return palindromeIndex;
}

/* 代码演示 */
function Demo(props) {
  const [inputValue, setInputValue] = useState(''),
    [result, setResult] = useState([]);

  // 修改输入
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  // 获取回文字符串
  function handleGetPalindromeClick(event) {
    const indexArr = palindrome(inputValue);

    setResult(indexArr.map(([s, e]) => inputValue.slice(s, e + 1)));
  }

  // 重置
  function handleResetClick(event) {
    setInputValue('');
    setResult([]);
  }

  // 渲染结果
  function resultRender() {
    return result.map((o, i) => <li key={ i.toString() }>{ o }</li>);
  }

  return (
    <Fragment>
      <Title level={ 2 }>代码演示</Title>
      <div className="mb-[8px] flex">
        <div className="grow">
          <Input className="w-full" value={ inputValue } placeholder="请输入字符串" onChange={ handleInputChange } />
        </div>
        <div className="shrink-0">
          <Button.Group>
            <Button onClick={ handleGetPalindromeClick }>获取回文字符串</Button>
            <Button onClick={ handleResetClick }>重置</Button>
          </Button.Group>
        </div>
      </div>
      <Title level={ 5 }>输出结果：</Title>
      { result.length <= 0 ? <p>无结果</p> : <ul>{ resultRender() }</ul> }
    </Fragment>
  );
}

export default Demo;