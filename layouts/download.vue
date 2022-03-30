<template>
  <div class="main">
    <Nuxt />
    <FooterDownload />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
})
</script>
<style lang="scss" scoped>

.main {
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
