<template>
  <div class="container">
    <DeveloperSlider />
    <Navigator :navigation="navigation"/>
    <DeveloperApi ref="api"/>
    <DeveloperSdk ref="sdk"/>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      navigation:[
        { label: 'Open API', name: 'api'},
        { label: 'SDK', name: 'sdk'}
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
