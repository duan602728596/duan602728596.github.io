import { Typography, Alert } from 'antd';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import PersonExample from './codeExample/person.mdx';
import ManExample from './codeExample/man.mdx';

const { Title, Paragraph } = Typography;

/* JavaScript对象原型 */
function ObjectPrototypes(props) {
  return (
    <ArticleLayout>
      <Title>【前端基础】JavaScript对象原型</Title>
      <Paragraph>
        <blockquote>
          每个实例对象都有一个私有属性__proto__，该属性指向它的构造函数的原型对象prototype。
          该原型对象的__proto__也可以指向其他构造函数的prototype。
        </blockquote>
      </Paragraph>
      <PersonExample />
      <ManExample />
      <Paragraph>一个对象的__proto__指向它的构造函数的prototype。</Paragraph>
      <Paragraph>Function.prototype.__proto__.constructor会指向Object。</Paragraph>
      <Paragraph>最新的标准推荐使用Object.getPrototypeOf获取__proto__。</Paragraph>
      <Alert type="info"
        message={ [
          '参考地址：',
          <a key="febook" href="https://febook.hzfe.org/awesome-interview/book2/js-inherite" target="_blank" rel="noopener noreferrer">
            https://febook.hzfe.org/awesome-interview/book2/js-inherite
          </a>,
          <a key="object-proto" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
          </a>,
          <a key="object-getPrototypeOf" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf
          </a>
        ] }
      />
    </ArticleLayout>
  );
}

export default ObjectPrototypes;