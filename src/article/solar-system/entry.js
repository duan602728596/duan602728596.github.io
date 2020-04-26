import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import Nav from '../../components/Nav/Nav';
import Article from '../../components/Article/Article';
import Content from './Content';

Vue.use(VueCompositionApi);

/* app */
const app = new Vue({
  render() {
    return (
      <div id="app">
        <Nav />
        <Content />
        <Article />
      </div>
    );
  }
}).$mount(document.getElementById('app'));