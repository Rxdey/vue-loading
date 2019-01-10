import Vue from 'vue';
import example from './index.vue';
import vueLoader from 'vue-loading-rx'

// Vue.use(vueLoader);
console.log(vueLoader)
new Vue({
  el: '#app',
  render: h => h(example)
});
