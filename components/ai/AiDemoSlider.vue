<template>
  <Slider v-bind="{ ...sliderInfo }" />
</template>
<script lang="ts">
import { Vue, Component, Watch} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private sliderInfo = {}

  @Watch('$route.query', { deep: true, immediate: true })
  public onRouterChange() {
    switch (this.$route.query.info) {
      case 'face':
        this.sliderInfo = {
              title: '人脸检测与属性分析',
              desc: '快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息新增',
              fontStyle: { color: '#000' },
              picName: undefined,
              btnDesc: '查看文档',
              btnSrc: 'https://www.ctyun.cn/products/10011360',
              backgroundStyle: { 'background': "#fff url('/_nuxt/assets/mock/ai/demo/face/slider_banner.png') no-repeat", 'background-size': '100% 100%' }
            }
        break
      case 'mask':
        this.sliderInfo = {
              title: '人脸检测与属性分析',
              desc: '快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息新增',
              fontStyle: { color: '#000' },
              picName: undefined,
              btnDesc: '查看文档',
              btnSrc: 'https://www.ctyun.cn/products/10011360',
              backgroundStyle: { 'background': "#fff url('/_nuxt/assets/mock/ai/demo/face/slider_banner.png') no-repeat", 'background-size': '100% 100%' }
            }
        break
      case 'ped':
        this.sliderInfo = {
              title: '人脸检测与属性分析',
              desc: '快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息新增',
              fontStyle: { color: '#000' },
              picName: undefined,
              btnDesc: '查看文档',
              btnSrc: 'https://www.ctyun.cn/products/10011360',
              backgroundStyle: { 'background': "#fff url('/_nuxt/assets/mock/ai/demo/face/slider_banner.png') no-repeat", 'background-size': '100% 100%' }
            }
        break
      case 'dangerzone':
        this.sliderInfo = {
              title: '人脸检测与属性分析',
              desc: '快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息新增',
              fontStyle: { color: '#000' },
              picName: undefined,
              btnDesc: '查看文档',
              btnSrc: 'https://www.ctyun.cn/products/10011360',
              backgroundStyle: { 'background': "#fff url('/_nuxt/assets/mock/ai/demo/face/slider_banner.png') no-repeat", 'background-size': '100% 100%' }
            }
        break
      case 'body':
        this.sliderInfo = {
              title: '人脸检测与属性分析',
              desc: '快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息新增',
              fontStyle: { color: '#000' },
              picName: undefined,
              btnDesc: '查看文档',
              btnSrc: 'https://www.ctyun.cn/products/10011360',
              backgroundStyle: { 'background': "#fff url('/_nuxt/assets/mock/ai/demo/face/slider_banner.png') no-repeat", 'background-size': '100% 100%' }
            }
        break
      case 'smoke':
        this.sliderInfo = {
              title: '人脸检测与属性分析',
              desc: '快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息新增',
              fontStyle: { color: '#000' },
              picName: undefined,
              btnDesc: '查看文档',
              btnSrc: 'https://www.ctyun.cn/products/10011360',
              backgroundStyle: { 'background': "#fff url('/_nuxt/assets/mock/ai/demo/face/slider_banner.png') no-repeat", 'background-size': '100% 100%' }
            }
        break
    }
  }
}
</script>
