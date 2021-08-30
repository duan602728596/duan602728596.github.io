import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';
import Demo from './Demo';

const { Title, Paragraph } = Typography;

/* 判断一串数字是有效的时间戳 */
function NumberIsTimeStamp(props) {
  return (
    <ArticleLayout>
      <Title>判断一串数字是有效的时间戳</Title>
      <Paragraph>通过换算的时间是否是1970年来判断是否是有效的时间戳。</Paragraph>
      <HighLight type="javascript">
        new Date(time).toString() !== new Date(1).toString()
      </HighLight>
      <Demo />
    </ArticleLayout>
  );
}

export default NumberIsTimeStamp;