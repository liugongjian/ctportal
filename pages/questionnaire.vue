<template>
  <div>
    <div>天翼云视频监控需求问卷</div>
    <el-button @click="submit">提交</el-button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'h5',
  methods: {
    submit() {
      console.log('submit!')
    }
  }
})
</script>