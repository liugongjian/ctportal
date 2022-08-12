<template>
  <Slider v-bind="{ title, desc, fontStyle, picName, btnDesc, btnSrc, backgroundStyle }" />
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private title = '支持与服务'
  private desc = '服务工程师团队为您提供7*24小时技术服务支持。若您在使用百度智能云时遇到问题，您可以通过工单、智能客服、自助服务、热线电话等寻求帮助'
  private fontStyle = { color: '#000' }
  // private picSrc = '~/assets/mock/home_slider.png'
  private picName = undefined
  private btnDesc = undefined
  private btnSrc = 'https://www.ctyun.cn/products/10011360'
  private backgroundStyle = {
      'background': "#fff url('/_nuxt/assets/mock/service/service_banner.png') no-repeat",
      'background-size': 'auto 100%',
      'background-position': 'right'
    }
}
</script>
