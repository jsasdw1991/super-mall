<template>
  <div class="slider-menu" id="sliderMenu">
    <i :class="[ menuIcon, 'slider-menu-icon' ]" @click="show=!show"></i>
    <transition name="slide-fade">
      <div class="slider-menu-panel" v-if="show">
        <div class="slider-menu-panel-mask" @click="show=!show">
        </div>
        <div class="slider-menu-panel-content">
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/saleCenter">销售中心</router-link></li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import '@/assets/styles/component/sliderMenu.scss'

export default {
  name: 'sliderMenu',
  props: {
    menuIcon: {
      type: String,
      required: false,
      default: 'fa fa-bars'
    }
  },
  data: () => ({
    show: false
  })
}
</script>
