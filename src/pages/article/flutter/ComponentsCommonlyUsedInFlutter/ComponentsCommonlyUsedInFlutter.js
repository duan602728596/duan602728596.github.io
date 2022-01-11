import { Typography, Anchor } from 'antd';
import NoSSR from 'react-no-ssr';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import isMobile from '../../../../utils/isMobile';
import MaterialApp from './flutterComponents/MaterialApp.mdx';
import Scaffold from './flutterComponents/Scaffold.mdx';
import AppBar from './flutterComponents/AppBar.mdx';
import Container from './flutterComponents/Container.mdx';

const { Title } = Typography;

/* Flutter常用的组件 */
function ComponentsCommonlyUsedInFlutter(props) {
  return (
    <ArticleLayout>
      <Title>Flutter常用的组件</Title>
      <MaterialApp />
      <Scaffold />
      <AppBar />
      <Container />
      {
        isMobile() ? null : (
          <NoSSR>
            <Anchor className="fixed top-[64px] right-[20px]" targetOffset={ 64 }>
              <Anchor.Link href="#MaterialApp" title="MaterialApp" />
              <Anchor.Link href="#Scaffold" title="Scaffold" />
              <Anchor.Link href="#AppBar" title="AppBar" />
              <Anchor.Link href="#Container" title="Container" />
            </Anchor>
          </NoSSR>
        )
      }
    </ArticleLayout>
  );
}

export default ComponentsCommonlyUsedInFlutter;