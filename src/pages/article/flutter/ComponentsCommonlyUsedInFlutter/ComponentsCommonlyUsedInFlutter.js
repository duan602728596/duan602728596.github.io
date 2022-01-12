import { Typography, Anchor, Alert } from 'antd';
import NoSSR from 'react-no-ssr';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import isMobile from '../../../../utils/isMobile';
import FlutterMaterialApp from './flutterComponents/MaterialApp.mdx';
import FlutterScaffold from './flutterComponents/Scaffold.mdx';
import FlutterAppBar from './flutterComponents/AppBar.mdx';
import FlutterContainer from './flutterComponents/Container.mdx';
import FlutterColumn from './flutterComponents/Column.mdx';
import FlutterRow from './flutterComponents/Row.mdx';
import FlutterExpanded from './flutterComponents/Expanded.mdx';
import FlutterGridView from './flutterComponents/GridView.mdx';
import FlutterListView from './flutterComponents/ListView.mdx';
import FlutterStack from './flutterComponents/Stack.mdx';
import FlutterPositioned from './flutterComponents/Positioned.mdx';
import FlutterSizedBox from './flutterComponents/SizedBox.mdx';
import FlutterCenter from './flutterComponents/Center.mdx';
import FlutterAlign from './flutterComponents/Align.mdx';
import FlutterPadding from './flutterComponents/Padding.mdx';
import FlutterClipRRect from './flutterComponents/ClipRRect.mdx';
import FlutterElevatedButton from './flutterComponents/ElevatedButton.mdx';
import FlutterIconButton from './flutterComponents/IconButton.mdx';
import FlutterTextField from './flutterComponents/TextField.mdx';
import FlutterImage from './flutterComponents/Image.mdx';
import FlutterGestureDetector from './flutterComponents/GestureDetector.mdx';
import FlutterShowDialog from './flutterComponents/showDialog.mdx';
import FlutterInheritedWidget from './flutterComponents/InheritedWidget.mdx';
import FlutterNotification from './flutterComponents/Notification.mdx';
import FlutterRawKeyboardListener from './flutterComponents/RawKeyboardListener.mdx';

const { Title } = Typography;

/* Flutter常用的组件 */
function ComponentsCommonlyUsedInFlutter(props) {
  return (
    <ArticleLayout>
      <Title>Flutter常用的组件</Title>
      {/* 应用程序组件 */}
      <Title id="application" level={ 2 }>应用程序组件</Title>
      <FlutterMaterialApp />
      <FlutterScaffold />
      <FlutterAppBar />
      {/* 盒模型布局组件 */}
      <Title id="box-model-layout" level={ 2 }>盒模型布局组件</Title>
      <FlutterContainer />
      <FlutterColumn />
      <FlutterRow />
      <FlutterExpanded />
      <FlutterGridView />
      <FlutterListView />
      <FlutterStack />
      <FlutterPositioned />
      <FlutterSizedBox />
      {/* 样式组件 */}
      <Title id="style" level={ 2 }>样式组件</Title>
      <FlutterCenter />
      <FlutterAlign />
      <FlutterPadding />
      <FlutterClipRRect />
      {/* 功能组件 */}
      <Title id="functional" level={ 2 }>功能组件</Title>
      <FlutterElevatedButton />
      <FlutterIconButton />
      <FlutterTextField />
      <FlutterImage />
      {/* 工具组件 */}
      <Title id="tools" level={ 2 }>工具组件</Title>
      <FlutterGestureDetector />
      <FlutterShowDialog />
      <FlutterInheritedWidget />
      <FlutterNotification />
      <FlutterRawKeyboardListener />
      <Alert type="info"
        message={ [
          '参考地址：',
          <div key="flutter-in-action">
            Flutter实战：
            <a href="https://book.flutterchina.club/" target="_blank" rel="noopener noreferrer">
              https://book.flutterchina.club/
            </a>
          </div>,
          <div key="rich_code_editor">
            Flutter富文本编辑器：
            <a href="https://pub.dev/packages/rich_code_editor" target="_blank" rel="noopener noreferrer">
              https://pub.dev/packages/rich_code_editor
            </a>
          </div>,
          <div key="FlutterTextSpanField">
            Flutter自定义块样式输入框：
            <a href="https://github.com/JiangJuHong/FlutterTextSpanField" target="_blank" rel="noopener noreferrer">
              https://github.com/JiangJuHong/FlutterTextSpanField
            </a>
          </div>
        ] }
      />
      {
        isMobile() ? null : (
          <NoSSR>
            <Anchor className="fixed top-[64px] right-[20px]" targetOffset={ 70 }>
              <Anchor.Link href="#application" title="应用程序组件" />
              <Anchor.Link href="#box-model-layout" title="盒模型布局组件" />
              <Anchor.Link href="#style" title="样式组件" />
              <Anchor.Link href="#functional" title="功能组件" />
              <Anchor.Link href="#tools" title="工具组件" />
            </Anchor>
          </NoSSR>
        )
      }
    </ArticleLayout>
  );
}

export default ComponentsCommonlyUsedInFlutter;