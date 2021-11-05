<template>
  <div class="container">
    <div class="top-bar">
      <svg-icon height="200" width="200" color="white" name="finish"></svg-icon>
    </div>
    <div class="bottom-bar">
      <h1 align="center">提交成功</h1>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'h5'
})
</script>
<style scoped>
  .top-bar {
    padding: 20px 0;
    margin-bottom: 20px;
    background-color: #29CDB5;
    text-align: center;
  }
  .bottom-bar {
    letter-spacing: 0.5em;
  }
</style>