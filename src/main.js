import Vue from 'vue';

import './styles/main.scss';
import Layout from './Layout.vue';

new Vue({
  el: '#app',
  render: h => h(Layout)
})