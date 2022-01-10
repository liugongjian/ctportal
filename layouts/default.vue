<template>
  <div>
    <Header class="mobile_header"/>
    <Nuxt />
    <Footer class="mobile_footer"/>
    <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
})
</script>
<style scoped>
@media (max-device-width: 500px) and (-webkit-min-device-pixel-ratio:2){
  .mobile_footer {
    display: none;
  }
  .mobile_header {
    display: none;
  }
}
</style>
