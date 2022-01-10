<template>
  <div>
    <!-- <Header class="mobile_header"/> -->
    <Nuxt />
    <!-- <Footer class="mobile_footer"/> -->
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
