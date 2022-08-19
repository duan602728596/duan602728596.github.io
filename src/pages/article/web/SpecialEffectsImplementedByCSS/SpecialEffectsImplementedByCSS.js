import { Typography } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import SearchBoxExpansion from './SearchBoxExpansion/SearchBoxExpansion';
import FormPlaceholder from './FormPlaceholder/FormPlaceholder';

const { Title } = Typography;

/* 使用css动画实现各种特效 */
function SpecialEffectsImplementedByCSS(props) {
  return (
    <ArticleLayout>
      <Title>使用CSS动画实现各种特效</Title>
      <SearchBoxExpansion />
      <FormPlaceholder />
    </ArticleLayout>
  );
}

export default SpecialEffectsImplementedByCSS;