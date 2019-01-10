<template>
  <div class="home" v-loading.full="isLoading">
    <div class="demo1" @click="loading('isLoading2')" v-loading="isLoading2">局部加载</div>

    <div class="demo1" @click="loading('isLoading3')" v-loading.full="{background: 'rgba(255,255,255,.5)', show: isLoading3}">背景色</div>

    <div class="demo1" @click="loading('isLoading')">全局加载</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
  },
  data () {
    return {
      isLoading: false,
      isLoading2: false,
      isLoading3: false,
    };
  },
  methods: {
    loading(type) {
      this[type] = true;
      setTimeout(() => {
        this[type] = false;
      }, 2000);
    }
  },
  components: {
  },
};
</script>

<style lang="less">
*{margin: 0;padding: 0}
body,html{
  width: 100%;
  height: 100%;
}
.home{
  width: 100%;
  height: 100%;
  background: #f1f1f1;
}
.demo1{
  width: 100px;
  height: 50px;
  background: #f03d37;
  color: #fff;
  text-align: center;
  line-height: 50px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>
