<template>
<div class="app" id="app">
  <router-view name="header"></router-view>
  <router-view class="app-main"></router-view>
  <router-view name="footer"></router-view>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  mounted: function mounted () {
    this.init()

    if (!this.currentBrand) {
      this.$store.dispatch('getBrand', 1)
    }
  },
  methods: {
    init: function () {
      console.log('app', this.$store)
    }
  },
  computed: {
    ...mapGetters([
      'currentBrand'
    ])
  }
}
</script>
