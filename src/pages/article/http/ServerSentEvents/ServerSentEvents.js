import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import ServerSentEventsPageMdx from './serverSentEvents.mdx';

/* 使用Server-sent events技术，与浏览器单向通信 */
function ServerSentEvents(props) {
  return (
    <ArticleLayout>
      <ServerSentEventsPageMdx />
    </ArticleLayout>
  );
}

export default ServerSentEvents;