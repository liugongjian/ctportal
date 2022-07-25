<template>
  <div class="container">
    <HomeSlider />
    <Navigator :navigation="navigation"/>
    <HomeAi ref="ai"/>
    <HomeAdvantage ref="advantage"/>
    <HomeSolutions ref="solution"/>
    <HomeMap ref="map"/>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      navigation:[
        { label: 'AI能力的深度应用', name: 'ai'},
        { label: '产品优势', name: 'advantage'},
        { label: '行业解决方案', name: 'solution'},
        { label: '天翼云全国云资源布局', name: 'map'}
      ]
    }
  },
  mounted(){
    this.navigation = this.navigation.map( nav => ({
      ...nav,
      el: this.$refs[nav.name].$el
    }))
  }
})
</script>

<style lang="scss" scoped>
</style>



