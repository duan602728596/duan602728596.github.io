import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';
import PromiseRunExample from './codeExample/promiseRun.mdx';

const { Title, Paragraph } = Typography;

/* 浏览器事件循环 */
function BrowserEventLoop(props) {
  return (
    <ArticleLayout>
      <Title>浏览器事件循环</Title>
      <Paragraph>
        <blockquote>
          浏览器需要事件循环来协调事件、用户操作、脚本执行、渲染、网络请求等。通过事件循环，浏览器可以利用任务队列来管理任务，
          让异步事件非阻塞地执行。每个客户端对应的事件循环是相对独立的。
        </blockquote>
        <blockquote>
          浏览器事件循环是以浏览器为宿主环境实现的事件调度，操作顺序如下：
          <ol>
            <li>执行同步代码。</li>
            <li>执行一个宏任务（执行栈中没有就从任务队列中获取）。</li>
            <li>执行过程中如果遇到微任务，就将它添加到微任务的任务队列中。</li>
            <li>宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）。</li>
            <li>当前宏任务执行完毕，开始检查渲染，然后渲染线程接管进行渲染。</li>
            <li>渲染完毕后，JavaScript 线程继续接管，开始下一个循环。</li>
          </ol>
        </blockquote>
      </Paragraph>
      <Paragraph>这是一个经典的题目：</Paragraph>
      <PromiseRunExample />
      <Paragraph>输出：</Paragraph>
      <HighLight>{ '1\n2\n5\n3\n6\n4' }</HighLight>
      <Alert type="info"
        message={ [
          '参考地址：',
          <a key="link" href="https://febook.hzfe.org/awesome-interview/book3/browser-event-loop" target="_blank" rel="noopener noreferrer">
            https://febook.hzfe.org/awesome-interview/book3/browser-event-loop
          </a>
        ] }
      />
    </ArticleLayout>
  );
}

export default BrowserEventLoop;