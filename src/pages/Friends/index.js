import Main from '../../components/Main/Main';
import BlankLink from '../../components/BlankLink/BlankLink';
import Project from '../Project/Project';

/* 友情链接 */
const friendsList = [
  {
    title: "喵's StackHarbor",
    href: 'https://sh.alynx.one/',
    description: (
      <BlankLink href="https://sh.alynx.one/">
        https://sh.alynx.one/
      </BlankLink>
    )
  },
  {
    title: 'lugosi',
    href: 'https://lugosix.github.io/blog/',
    description: (
      <BlankLink href="https://lugosix.github.io/blog/">
        https://lugosix.github.io/blog/
      </BlankLink>
    )
  }
];

function Index(props) {
  return (
    <Main>
      <Project dataSource={ friendsList } />
    </Main>
  );
}

export default Index;