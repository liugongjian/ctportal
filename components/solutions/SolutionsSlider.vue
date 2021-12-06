<template>
  <Slider v-bind="{title,desc,picName,btnDesc,btnSrc}" />
</template>

<script lang="ts">
import { Vue, Component, Watch} from 'vue-property-decorator'
import  Slider from '../Slider.vue'

@Component
export default class extends Vue{
  private title = ''
  private desc = ''
  private picName = 'home_slider'
  private btnDesc = ''
  private btnSrc = ''

  @Watch('$route.query', { deep: true, immediate: true })
  public onRouterChange() {
    switch (this.$route.query.info) {
      case 'city':
        this.title = '智慧城市'
        this.desc = '重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析'
        break
      case 'education':
        this.title = '智慧教育'
        this.desc = '重点面向校园、培训机构等行业客户的视频监控需求，实现安全的内容分发和高价值内容录制留存'
        break
      case 'community':
        this.title = '智慧社区'
        this.desc = '重点面向涉及社区客户在线监控服务：如楼宇、小区、园区等，支持大并发就近上云'
        break
      case 'site':
        this.title = '智慧工地'
        this.desc = '重点面向建筑行业客户，纳管所有工地视频，实现精准识别，提前告警等'
        break
      case 'retail':
        this.title = '智慧零售'
        this.desc = '重点面向零售行业客户，提供智能远程视频点检、远程看店，最终实现数字化精细化运营'
        break
      case 'logistics':
        this.title = '智慧物流'
        this.desc = '重点面向物流行业客户，支持智能检测与分析，实现货物轨迹动态跟踪'
        break
    }
  }
}
</script>
