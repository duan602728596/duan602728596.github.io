import { List } from 'antd';
import BlankLink from '../../components/BlankLink/BlankLink';

/* 项目列表 */
function Project(props) {
  const { dataSource = [] } = props;

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

  return <List dataSource={ dataSource } renderItem={ projectListRender } bordered={ true } />;
}

export default Project;