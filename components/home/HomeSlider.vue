<template>
  <Slider v-bind="{title,desc,picName,btnDesc,btnSrc}" />
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private title = '抢先体验视频监控服务'
  private desc = '视频监控服务（Video Surveillance Service，VSS）依托天翼云遍布全国的边缘节点、出色的视频技术和AI能力，面向智慧城市、智慧教育、智慧零售、智慧社区、智慧物流、智慧工地等场景提供云边协同的视频接入、视频存储、视频分发、视频分析和视频IAM服务，助力政企数字化转型。'
  // private picSrc = '~/assets/mock/home_slider.png'
  private picName = 'home_slider'
  private btnDesc = '立即体验'
  private btnSrc = 'https://www.ctyun.cn/products/10011360'
}
</script>
