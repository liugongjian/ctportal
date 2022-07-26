<template>
  <div class="container">
    <AiSlider />
    <Navigator :navigation="navigation"/>
    <AiList ref="list"/>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      navigation:[
        { label: '热门AI应用', name: 'ai'},
        { label: '人脸识别', name: 'face'},
        { label: '人体识别', name: 'body'},
        { label: '场景识别', name: 'senario'}
      ]
    }
  },
  mounted(){
    this.navigation = this.navigation.map( nav => ({
      ...nav,
      el: this.$refs.list.$refs[nav.name].$el || this.$refs.list.$refs[nav.name]
    }))
  }
})
</script>
