<template>
  <div class="main-header" id="mainHeader">
    <div class="left text-left">
      <slider-menu :menu-icon="'iconfont icon-caidan icon-caidan-class'"></slider-menu>
    </div>
    <div class="center text-center">
      <img :src="logoImg" alt="">
    </div>
    <div class="right text-right">
      <i class="iconfont icon-gouwuche icon-gouwuche-class"></i>
    </div>
  </div>
</template>

<script>
import logoImg from '@/assets/images/logo.png'
import '@/assets/styles/layout/mainHeader.scss'
import SliderMenu from '../component/sliderMenu'

export default {
  name: 'mainHeader',
  components: {
    SliderMenu
  },
  data: () => ({
    logoImg: logoImg
  })
}
</script>
