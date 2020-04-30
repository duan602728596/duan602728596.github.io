import React, { Fragment } from 'react';
import { Typography } from 'antd';
import HighLight from '../../../components/HighLight/HighLight';
import Demo from './Demo/Demo';
import queueExample from './codeExample/queue.md';
import resultExample from './codeExample/result.md';
import consoleExample from './codeExample/console.md';

const { Title, Paragraph } = Typography;

/* 文章 */
function Article(props) {
  return (
    <Fragment>
      <Title>用JS实现多个任务并行执行的队列</Title>
      {/* 使用场景 */}
      <Title level={ 2 }>使用场景</Title>
      <Paragraph>
        今天在开发时，碰到了这么一个需求：需要上传多个视频文件；每个文件的上传在新线程内执行；同时最多有三个上传任务在执行；
        当一个任务执行完毕，执行下一个任务。这个需求就是并行执行队列内的任务。
      </Paragraph>
      <Paragraph>
        为了能够满足要求，需要知道可以同时执行的任务数、任务队列、正在执行的任务。当一个任务执行完毕后，需要分配下一个执行的任务。
      </Paragraph>
      {/* 代码实现 */}
      <Title level={ 2 }>代码实现</Title>
      <Paragraph>首先定义一个类：</Paragraph>
      <HighLight type="javascript">{ queueExample }</HighLight>
      <Paragraph>定义一个延迟执行的异步函数，并执行任务，测试代码是否满足需求：</Paragraph>
      <HighLight type="javascript">{ resultExample }</HighLight>
      <Paragraph>在控制台上会输出：</Paragraph>
      <HighLight>{ consoleExample }</HighLight>
      <Paragraph>
        可以看到，开始时执行了三个任务；每当有任务执行完毕，就会执行下一个任务。这样就满足了并行执行队列内的任务的需求。
      </Paragraph>
      {/* 代码演示 */}
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>共有6个任务，每个任务过一定时间后完成。任务执行完成后执行下一个任务，最多有3个任务在执行。</Paragraph>
      <Demo />
    </Fragment>
  );
}

export default Article;