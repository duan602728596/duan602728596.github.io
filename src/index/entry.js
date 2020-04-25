import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import Nav from '../components/Nav/Nav';
import ArticlesList from './ArticlesList';

Vue.use(VueCompositionApi);

/* app */
const app = new Vue({
  el: '#app',
  render() {
    return (
      <div id="app">
        <Nav />
        <ArticlesList />
      </div>
    );
  }
}).$mount(document.getElementById('app'));