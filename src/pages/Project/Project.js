import { Fragment } from 'react';
import { List } from 'antd';
import style from './project.sass';

/* 项目信息 */
const projectList = [
  {
    title: 'antd-schema-form',
    href: 'https://github.com/duan602728596/antd-schema-form',
    description: (
      <Fragment>
        <p>基于Ant Design，可以通过JSON Schema配置生成可交互的表单。</p>
        <a href="https://duan602728596.github.io/antd-schema-form/#/" target="_blank" rel="noopener noreferrer">
          https://duan602728596.github.io/antd-schema-form/#/
        </a>
      </Fragment>
    )
  },
  {
    title: 'gulp-memory-fs',
    href: 'https://github.com/duan602728596/gulp-memory-fs',
    description: 'gulp环境下也可以使用内存文件系统。'
  },
  {
    title: '48tools',
    href: 'https://github.com/duan602728596/48tools',
    description: '48工具，提供公演、口袋直播录源，公演、口袋录播下载，B站直播抓取，B站视频下载，摩点集资统计，视频截取，'
      + '视频导出gif，视频合并等功能。'
  },
  {
    title: 'qqtools',
    href: 'https://github.com/duan602728596/qqtools',
    description: (
      <Fragment>
        <p>QQ群工具，提供摩点监听，48系成员直播监听，48系成员信息监听，微博监听，群成员自动欢迎等功能。</p>
        <b className={ style.linkTitle }>使用手册：</b>
        <a href="https://www.yuque.com/bbkkbkk/qqtools" target="_blank" rel="noopener noreferrer">
          https://www.yuque.com/bbkkbkk/qqtools
        </a>
      </Fragment>
    )
  }
];

/* 项目列表 */
function Project(props) {
  // 列表渲染
  function projectListRender(item) {
    const title = <a href={ item.href } target="_blank" rel="noopener noreferrer">{ item.title }</a>,
      description = <div>{ item.description }</div>;

    return (
      <List.Item>
        <List.Item.Meta title={ title } description={ description } />
      </List.Item>
    );
  }

  return <List dataSource={ projectList } renderItem={ projectListRender } bordered={ true } />;
}

export default Project;