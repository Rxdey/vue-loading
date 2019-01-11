# vue-loading-rx

> Vue directive for loading

## Install  

### npm  
```bash
npm install vue-loading-rx --save
```
### yarn  
```bash
yarn add vue-loading-rx
```

## Usage  

```javascript
// main.js
import Vue from 'vue';
import vueLoader from 'vue-loading-rx';
import 'vue-loading-rx/dist/vue-loading.css';

Vue.use(vueLoader, 'loading');
```
 
```html
<template>
  <div class="demo1" v-loading.full="isLoading">全局加载</div>
  <div class="demo1" v-loading="isLoading2">局部加载</div>
  <div class="demo1" v-loading.full="{background: 'rgba(255,255,255,.5)', show: isLoading3}" >其他配置</div>
</template>
```

## [example](https://rxdey.github.io/vue-loading/demo/index.html)
