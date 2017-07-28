<template>
<div class="app" id="app">
  <router-view name="slider"></router-view>
  <router-view name="header"></router-view>
  <router-view class="app-main"></router-view>
  <router-view name="footer"></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  mounted: function mounted () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('app', this.$store)
    }
  }
}
</script>
