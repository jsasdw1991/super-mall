<template>
  <div class="slider-menu" id="sliderMenu">
    <span class="fa fa-bars" @click="show=!show"></span>
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
  data: () => ({
    show: false
  })
}
</script>
