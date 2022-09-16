import { Fragment, useId } from 'react';
import { Typography } from 'antd';
import style from './searchBoxExpansion.module.sass';
import SearchBoxExpansionExample from '../codeExample/searchBoxExpansion.mdx';

const { Title } = Typography;

/* 搜索框伸缩 */
function SearchBoxExpansion(props) {
  const id = useId().replace(/:/g, '');
  const checkboxId = `${ id }-checkbox`;

  return (
    <Fragment>
      <Title level={ 2 }>可伸缩的搜索框</Title>
      <div className="p-[16px]">
        <div className={ style.search }>
          <input className={ style.searchCheckbox } id={ checkboxId } type="checkbox" />
          <input className={ style.searchText } type="text" placeholder="搜索" />
          <label className={ style.searchLabel } htmlFor={ checkboxId } tabIndex={ 0 } />
        </div>
      </div>
      <SearchBoxExpansionExample />
    </Fragment>
  );
}

export default SearchBoxExpansion;