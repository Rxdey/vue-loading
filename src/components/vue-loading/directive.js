// import Vue from 'vue';
import Loading from './loading.vue';
const vueLoading = Vue => {
  const Mask = Vue.extend(Loading);
  const toggleLoading = (el, binding) => {
    if (!binding.modifiers.full && !binding.value.full) {
      if (el.style.position === '') el.style.position = 'relative';
      el.mask.$el.style.position = 'absolute';
      el.appendChild(el.mask.$el);
    } else {
      el.mask.$el.style.position = 'fixed';
      // el.appendChild(el.mask.$el);
      document.body.appendChild(el.mask.$el);
    }

    // el.mask.isShow = binding.value?binding.value:binding.value.show;
    if (Object.prototype.toString.call(binding.value) !== '[object Object]') {
      el.mask.isShow = binding.value;
    } else {
      el.mask.isShow = binding.value.show;
    }
    el.mask.background = binding.value.background || el.mask.background;
  };

  return {
    bind(el, binding) {
      el.mask = new Mask({
        el: document.createElement('div')
      });
      toggleLoading(el, binding);
    },
    update(el, binding) {
      if (Object.prototype.toString.call(binding.value) !== '[object Object]') {
        el.mask.isShow = binding.value;
      } else {
        el.mask.isShow = binding.value.show;
      }
    },
    unbind(el, binding) {
      if (!binding.modifiers.full && !binding.value.full) {
        el.removeChild(el.mask.$el);
      } else {
        document.body.removeChild(el.mask.$el);
      }
    }
  };
};

export default vueLoading;
