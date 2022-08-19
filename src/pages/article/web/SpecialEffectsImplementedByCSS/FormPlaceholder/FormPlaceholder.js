import { Fragment, useId } from 'react';
import { Typography } from 'antd';
import style from './formPlaceholder.module.sass';
import FormPlaceholderExample from '../codeExample/formPlaceholder.mdx';

const { Title } = Typography;

/* 表单占位符 */
function FormPlaceholder(props) {
  const id = useId();
  const inputTextId = `${ id }-input-text`;

  return (
    <Fragment>
      <Title level={ 2 }>表单占位符</Title>
      <div className="p-[16px]">
        <div className={ style.formPlaceholder }>
          <input className={ style.formPlaceholderInputText } id={ inputTextId } type="text" placeholder="姓名" />
          <label className={ style.formPlaceholderLabel } htmlFor={ inputTextId }>姓名</label>
        </div>
      </div>
      <FormPlaceholderExample />
    </Fragment>
  );
}

export default FormPlaceholder;