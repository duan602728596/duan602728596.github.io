import { Fragment } from 'react';
import { List } from 'antd';
import BlankLink from '../../components/BlankLink/BlankLink';

/* 项目信息 */
const projectList = [
  {
    title: 'antd-schema-form',
    href: 'https://github.com/duan602728596/antd-schema-form',
    description: (
      <Fragment>
        <p>基于Ant Design，可以通过JSON Schema配置生成可交互的表单。</p>
        <BlankLink href="https://duan602728596.github.io/antd-schema-form/#/">
          https://duan602728596.github.io/antd-schema-form/#/
        </BlankLink>
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
    description: (
      <Fragment>
        <p>48工具，提供公演、口袋48直播录源，公演、口袋48录播下载，封面下载，B站直播抓取，B站视频下载，A站直播抓取，A站视频下载，抖音视频下载，视频截取，视频导出gif，视频合并等功能。口袋48的pc版，可以看成员的直播、弹幕和录播。</p>
        <b className="color-[rgba(0, 0, 0, .85)]">使用手册：</b>
        <BlankLink href="https://yzb1g5r02h.feishu.cn/docx/MxfydWlNaovZ5sxsbJ5crnAlnVb">
          https://yzb1g5r02h.feishu.cn/docx/MxfydWlNaovZ5sxsbJ5crnAlnVb
        </BlankLink>
      </Fragment>
    )
  },
  {
    title: 'qqtools',
    href: 'https://github.com/duan602728596/qqtools',
    description: (
      <Fragment>
        <p>QQ群工具，提供48系成员直播监听，48系成员信息监听，微博监听，抖音监听，小红书监听，B站直播监听，群成员自动欢迎，定时消息，自定义命令等功能。</p>
        <b className="color-[rgba(0, 0, 0, .85)]">使用手册：</b>
        <BlankLink href="https://yzb1g5r02h.feishu.cn/docx/R123d4UKKovQx0x1dM2cDce7n9c">
          https://yzb1g5r02h.feishu.cn/docx/R123d4UKKovQx0x1dM2cDce7n9c
        </BlankLink>
      </Fragment>
    )
  },
  {
    title: 'umi-plugin-redux-toolkit',
    href: 'https://github.com/duan602728596/umi-plugin-redux-toolkit',
    description: 'umi3的插件，使用@reduxjs/toolkit。'
  }
];

/* 项目列表 */
function Project(props) {
  // 列表渲染
  function projectListRender(item) {
    const title = <BlankLink href={ item.href }>{ item.title }</BlankLink>,
      description = <div className="text-[#595959]">{ item.description }</div>;

    return (
      <List.Item>
        <List.Item.Meta title={ title } description={ description } />
      </List.Item>
    );
  }

  return <List dataSource={ projectList } renderItem={ projectListRender } bordered={ true } />;
}

export default Project;