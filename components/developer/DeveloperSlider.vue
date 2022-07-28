<template>
  <Slider v-bind="{ title, desc, fontStyle, picName, btnDesc, btnSrc, backgroundStyle }" />
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private title = '开发者'
  private desc = '为开发者提供API、SDK、API在线调试工具等,方便快捷调用天翼云视频监控开放能力'
  private fontStyle = { color: '#000' }
  // private picSrc = '~/assets/mock/home_slider.png'
  private picName = undefined
  private btnDesc = undefined
  private btnSrc = undefined
  private backgroundStyle = { 'background': "#fff url('/_nuxt/assets/mock/slider_developer.png') 100% no-repeat", 'background-size': 'cover' }
}
</script>
