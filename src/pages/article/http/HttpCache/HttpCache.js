import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';

const { Title, Paragraph } = Typography;

/* HTTP缓存策略 */
function HttpCache(props) {
  return (
    <ArticleLayout>
      <Title>hTTP缓存策略</Title>
      <Paragraph>
        HTTP缓存分为<b>强缓存</b>和<b>协商缓存</b>。
      </Paragraph>
      <Title level={ 2 }>强缓存</Title>
      <Title level={ 3 }>Expires</Title>
      <Paragraph>在响应头中包含Expires，Expires的值为日期/时间，即在此时候之后，响应过期。</Paragraph>
      <HighLight type="text">Expires: Tue Jan 04 2022 16:01:42 GMT+0800</HighLight>
      <Title level={ 3 }>Cache-Control</Title>
      <Paragraph>在响应头中包含Cache-Control，通过指定指令来实现缓存机制。</Paragraph>
      <HighLight type="text">Cache-Control: max-age=300</HighLight>
      <Title level={ 2 }>协商缓存</Title>
      <Paragraph>
        协商缓存通过可以通过<b>Last-Modified / If-Modified-Since</b>
        和<b>Etag / If-None-Match</b>控制，
        根据是否相应<b>304 Not Modified</b>来判断是否需要使用本地缓存文件。
      </Paragraph>
    </ArticleLayout>
  );
}

export default HttpCache;