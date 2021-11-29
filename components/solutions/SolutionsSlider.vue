<template>
  <Slider v-bind="{title,desc,picName,btnDesc,btnSrc}" />
</template>

<script lang="ts">
import { Vue, Component, Watch} from 'vue-property-decorator'
import  Slider from '../Slider.vue'

@Component
export default class extends Vue{
  private title = ''
  private desc = '重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析'
  private picName = 'home_slider'
  private btnDesc = '服务咨询'
  private btnSrc = ''

  @Watch('$route.query', { deep: true, immediate: true })
  public onRouterChange() {
    switch (this.$route.query.info) {
      case 'city':
        this.title = '智慧城市'
        break
      case 'education':
        this.title = '智慧教育'
        break
      case 'community':
        this.title = '智慧社区'
        break
      case 'site':
        this.title = '智慧工地'
        break
      case 'retail':
        this.title = '智慧零售'
        break
      case 'logistics':
        this.title = '智慧物流'
        break
    }
  }
}
</script>
