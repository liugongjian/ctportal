<template>
  <div class="advantage">
    <div class="advantage__container">
      <div class="advantage__title">产品优势</div>
      <div class="advantage__item__wrap">
        <list-item-2 v-for="item in list" :key="item.src" :item="item" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private list = [
    { src: require('~/assets/mock/advantage/all.png'), title: '覆盖/全网范围', content: 'VSS平台基于全国25+节点，采用云原生与边缘计算技术，构建一张全国范围广覆盖云边协同的视频云网，具备全网统一接入调度、全网统一存储调度和全网统一分析调度等能力'},
    { src: require('~/assets/mock/advantage/close.png'), title: '延迟/就近接入', content: '视频设备/平台上传视频流时，可以选择就近接入天翼云，平台通过全网统一调度系统，将视频流接入距离客户较近的节点，以实现较低的观看延迟和AI分析延迟'},
    { src: require('~/assets/mock/advantage/data_safty.png'), title: '安全/数据安全', content: '支持专线接入保证客户数据与互联网物理隔绝，所有操作均可以通过HTTPS协议加密传输，支持防盗链等安全技术，全链路保障数据安全'},
    { src: require('~/assets/mock/advantage/open.png'), title: '生态/开放生态', content: '适配市场主流设备，算法仓库一键托管，场景化API赋能行业应用，支持AI算法仓库统一管理，GPU算力智能调度，AI算法统一编排，对人脸/人体/车辆/物体/环境等算法全场景覆盖'}
  ]
}
</script>
<style lang="scss" scoped>
  .advantage {
    background: #f1f1f1;
    &__container {
      @include container;
      @include containerPadding;
    }
    &__title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 80px;
    }
    &__item__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
