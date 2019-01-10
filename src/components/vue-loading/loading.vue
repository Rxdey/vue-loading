<template>
  <transition name="fade">
    <div class="rx-loading" v-show="isShow" :style="{background:background}">
      <div class="rx-loading--icon">
        <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" stroke="#5d9bfd" strokeMiterlimit="10" class="path"></circle>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      isShow: false,
      // background: 'rgba(255, 255, 255, 0.5)',
      background: ''
    };
  }
};
</script>

<style lang="less">
.rx-loading {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1999;
  top: 0;
  left: 0;
  transition: 0.3s all;
  &--icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }
  .circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
    stroke-width: 2px;
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}

@keyframes color {
  0%,
  100% {
    stroke: #d62d20;
  }
  40% {
    stroke: #5d9bfd;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
