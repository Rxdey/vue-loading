import Vue from 'vue';
import example from './index.vue';
import vueLoader from 'vue-loading-rx'
import 'vue-loading-rx/dist/vue-loading.css'

Vue.use(vueLoader);
new Vue({
  el: '#app',
  render: h => h(example)
});
