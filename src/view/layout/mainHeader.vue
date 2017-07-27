<template>
  <div id="mainHeader">
    <slider-menu></slider-menu>
  </div>
</template>

<script>
import '@/assets/styles/layout/mainHeader.scss'

import SliderMenu from '../component/sliderMenu'

export default {
  name: 'mainHeader',
  components: {
    SliderMenu
  },
  data: () => ({

  })
}
</script>
