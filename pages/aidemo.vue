<template>
  <div class="container">
    <AiDemoSlider/>
    <Navigator :navigation="navigation"/>
    <AiDemoList ref="intro"/>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      navigation:[
        { label: '功能介绍', name: 'intro'}
      ]
    }
  },
  mounted(){
    this.navigation = this.navigation.map( nav => ({
      ...nav,
      el: this.$refs[nav.name].$el || this.$refs[nav.name]
    }))
  }
})
</script>
