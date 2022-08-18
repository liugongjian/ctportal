<template>
  <Slider v-bind="{ title, desc, fontStyle, picName, btnDesc, btnSrc, backgroundStyle }" />
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private title = 'AI能力的深度应用'
  private desc = '随着大数据处理能力及云基础设施的迅猛发展的背景下，Ai算法的成熟让监控安防的智能化成为可能。更多成熟可用的视频算法可以融入到各行业的生产流程中，赋予行业先进生产力'
  private fontStyle = { color: '#000' }
  // private picSrc = '~/assets/mock/home_slider.png'
  private picName = undefined
  private btnDesc = undefined
  private btnSrc = 'https://www.ctyun.cn/products/10011360'
  private backgroundStyle = {
                              'background': "#fff url('/_nuxt/assets/mock/ai/banner.png') no-repeat",
                              'background-size': 'auto 100%',
                              'background-position': 'right'
                            }
}
</script>
