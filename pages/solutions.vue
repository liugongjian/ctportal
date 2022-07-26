<template>
  <div class="container">
    <SolutionsSlider />
    <Navigator :navigation="navigation"/>
    <SolutionsList ref="list"/>
    <SolutionsArchitect ref="arch"/>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      navigation:[
        { label: '应用场景', name: 'list'},
        { label: '方案架构', name: 'arch'}
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

