<template>
  <Slider v-bind="{ title, desc, fontStyle, picName, btnDesc, btnSrc, backgroundStyle }" />
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private title = '抢先体验视频监控AI能力'
  private desc = '机器视觉是智能世界的眼睛，万物感知入口，行业数字化抓手。天翼云视频监控面向智慧城市、社区、乡村等提供极简部署、普惠AI、智能业务闭环的监控解决方案。'
  private fontStyle = { color: '#F1C482' }
  // private picSrc = '~/assets/mock/home_slider.png'
  private picName = 'slider_home'
  private btnDesc = '立即开通'
  private btnSrc = 'https://www.ctyun.cn/products/10011360'
  private backgroundStyle = { 'background-image': 'linear-gradient(179deg, #23233C 34%, #56566E 94%)' }
}
</script>
