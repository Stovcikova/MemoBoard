import FooterComponent from '../footer/footer.js';
import Vue from "vue";
import AppHtml from './app.html';
import MemoComponent from '../memo/memo.js';
//import Header from './components/Header.vue';

const AppComponent = Vue.component('app', {
  template: AppHtml,
  components: {
    FooterComponent,
    MemoComponent,
  },
  data: () => ({}),
});

export default AppComponent;

