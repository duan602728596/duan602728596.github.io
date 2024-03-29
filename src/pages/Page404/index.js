import { Result, Button } from 'antd';
import style from './index.module.sass';
import Picture from '../../components/Picture/Picture';

/* 404页面 */
function Index(props) {
  return (
    <Result title="对不起，页面不存在。"
      icon={
        <Picture className={ style.picture }
          imageClassName={ style.image }
          avifSrc="/images/404/nengdai.avif"
          webpSrc="/images/404/nengdai.webp"
          src="/images/404/nengdai.jpg"
          alt="能代"
        />
      }
      extra={ <Button type="primary" href="/">返回首页</Button> }
    />
  );
}

export default Index;