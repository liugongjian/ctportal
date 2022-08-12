<template>
  <div class="advantage light-bg">
    <div class="advantage__container">
      <div class="advantage__title">功能介绍</div>
      <div class="dark-bg">
        <div class="advantage__item__wrap">
          <list-item-2 v-for="item in list" :key="item.src" :item="item" :is-small="isSmall"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private list: Array<any> = []
  private isSmall = true

  @Watch('$route.query', { deep: true, immediate: true })
  public onRouterChange() {
    switch (this.$route.query.info) {
      case 'face':
        this.list = [{src: require('~/assets/mock/ai/demo/face/intro1.png'), title: '人脸检测定位', content: '检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸'},
                  { src: require('~/assets/mock/ai/demo/face/intro2.png'), title: '人脸属性分析', content: '准确识别多种人脸属性信息，包括年龄、性别、表情、情绪、口罩、等人脸质量信息及类型等'},
                  { src: require('~/assets/mock/ai/demo/face/intro3.png'), title: '关键点定位', content: '精准定位包括脸颊、眉、眼、口、鼻等人脸五官及轮廓的150个关键点'},
                  { src: require('~/assets/mock/ai/demo/face/intro4.png'), title: '情绪识别', content: '分析检测到的人脸的情绪，并返回置信度分数，目前可识别愤怒、厌恶、恐惧、高兴、伤心、惊讶、等9种情绪'},
                  { src: require('~/assets/mock/ai/demo/face/intro5.png'), title: '图片质量控制', content: '分析图片中人脸的遮挡度、模糊度、光照强度、姿态角度、完整度、大小等特征，确保图片符合质量标准'},
                  { src: require('~/assets/mock/ai/demo/face/intro6.png'), title: '在线图片活体检测', content: '基于单张图片中人像的破绽（摩尔纹、成像畸形等），判断图片是否为二次翻拍，过滤检测中不符合标准的人脸'}]
        break
      case 'mask':
        this.list = [{src: require('~/assets/mock/ai/demo/face/intro1.png'), title: '人脸检测定位', content: '检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸'},
                  { src: require('~/assets/mock/ai/demo/face/intro2.png'), title: '人脸属性分析', content: '准确识别多种人脸属性信息，包括年龄、性别、表情、情绪、口罩、等人脸质量信息及类型等'},
                  { src: require('~/assets/mock/ai/demo/face/intro3.png'), title: '关键点定位', content: '精准定位包括脸颊、眉、眼、口、鼻等人脸五官及轮廓的150个关键点'},
                  { src: require('~/assets/mock/ai/demo/face/intro4.png'), title: '情绪识别', content: '分析检测到的人脸的情绪，并返回置信度分数，目前可识别愤怒、厌恶、恐惧、高兴、伤心、惊讶、等9种情绪'},
                  { src: require('~/assets/mock/ai/demo/face/intro5.png'), title: '图片质量控制', content: '分析图片中人脸的遮挡度、模糊度、光照强度、姿态角度、完整度、大小等特征，确保图片符合质量标准'},
                  { src: require('~/assets/mock/ai/demo/face/intro6.png'), title: '在线图片活体检测', content: '基于单张图片中人像的破绽（摩尔纹、成像畸形等），判断图片是否为二次翻拍，过滤检测中不符合标准的人脸'}]
        break
      case 'ped':
        this.list = [{src: require('~/assets/mock/ai/demo/face/intro1.png'), title: '人脸检测定位', content: '检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸'},
                  { src: require('~/assets/mock/ai/demo/face/intro2.png'), title: '人脸属性分析', content: '准确识别多种人脸属性信息，包括年龄、性别、表情、情绪、口罩、等人脸质量信息及类型等'},
                  { src: require('~/assets/mock/ai/demo/face/intro3.png'), title: '关键点定位', content: '精准定位包括脸颊、眉、眼、口、鼻等人脸五官及轮廓的150个关键点'},
                  { src: require('~/assets/mock/ai/demo/face/intro4.png'), title: '情绪识别', content: '分析检测到的人脸的情绪，并返回置信度分数，目前可识别愤怒、厌恶、恐惧、高兴、伤心、惊讶、等9种情绪'},
                  { src: require('~/assets/mock/ai/demo/face/intro5.png'), title: '图片质量控制', content: '分析图片中人脸的遮挡度、模糊度、光照强度、姿态角度、完整度、大小等特征，确保图片符合质量标准'},
                  { src: require('~/assets/mock/ai/demo/face/intro6.png'), title: '在线图片活体检测', content: '基于单张图片中人像的破绽（摩尔纹、成像畸形等），判断图片是否为二次翻拍，过滤检测中不符合标准的人脸'}]
        break
      case 'dangerzone':
        this.list = [{ src: require('~/assets/mock/solution/construct1.png'), title: '智能管理', content: '适用于管理系统与安防系统不配套，信息化程度较低，员工管控便利性不足，无法投入大量人力保障工地现场的场景'},
                  { src: require('~/assets/mock/solution/construct2.png'), title: '安全预防', content: '纳管所有工地视频，AI算法高效识别现场情况，预防事故的发生，有效降低事故率，助力实现“云监工”'}]
        break
      case 'body':
        this.list = [{src: require('~/assets/mock/ai/demo/face/intro1.png'), title: '人脸检测定位', content: '检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸'},
                  { src: require('~/assets/mock/ai/demo/face/intro2.png'), title: '人脸属性分析', content: '准确识别多种人脸属性信息，包括年龄、性别、表情、情绪、口罩、等人脸质量信息及类型等'},
                  { src: require('~/assets/mock/ai/demo/face/intro3.png'), title: '关键点定位', content: '精准定位包括脸颊、眉、眼、口、鼻等人脸五官及轮廓的150个关键点'},
                  { src: require('~/assets/mock/ai/demo/face/intro4.png'), title: '情绪识别', content: '分析检测到的人脸的情绪，并返回置信度分数，目前可识别愤怒、厌恶、恐惧、高兴、伤心、惊讶、等9种情绪'},
                  { src: require('~/assets/mock/ai/demo/face/intro5.png'), title: '图片质量控制', content: '分析图片中人脸的遮挡度、模糊度、光照强度、姿态角度、完整度、大小等特征，确保图片符合质量标准'},
                  { src: require('~/assets/mock/ai/demo/face/intro6.png'), title: '在线图片活体检测', content: '基于单张图片中人像的破绽（摩尔纹、成像畸形等），判断图片是否为二次翻拍，过滤检测中不符合标准的人脸'}]
        break
      case 'smoke':
        this.list = [{src: require('~/assets/mock/ai/demo/face/intro1.png'), title: '人脸检测定位', content: '检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸'},
                  { src: require('~/assets/mock/ai/demo/face/intro2.png'), title: '人脸属性分析', content: '准确识别多种人脸属性信息，包括年龄、性别、表情、情绪、口罩、等人脸质量信息及类型等'},
                  { src: require('~/assets/mock/ai/demo/face/intro3.png'), title: '关键点定位', content: '精准定位包括脸颊、眉、眼、口、鼻等人脸五官及轮廓的150个关键点'},
                  { src: require('~/assets/mock/ai/demo/face/intro4.png'), title: '情绪识别', content: '分析检测到的人脸的情绪，并返回置信度分数，目前可识别愤怒、厌恶、恐惧、高兴、伤心、惊讶、等9种情绪'},
                  { src: require('~/assets/mock/ai/demo/face/intro5.png'), title: '图片质量控制', content: '分析图片中人脸的遮挡度、模糊度、光照强度、姿态角度、完整度、大小等特征，确保图片符合质量标准'},
                  { src: require('~/assets/mock/ai/demo/face/intro6.png'), title: '在线图片活体检测', content: '基于单张图片中人像的破绽（摩尔纹、成像畸形等），判断图片是否为二次翻拍，过滤检测中不符合标准的人脸'}]
        break
    }
  }
}
</script>
<style lang="scss" scoped>
  .advantage {
    // background: #f1f1f1;
    &__container {
        padding-left: 20px;
        padding-right: 20px;
        color: #333333;
        padding-top: 70px;
        padding-bottom: 70px;
    }
    &__title {
      font-size: 26px;
      text-align: center;
      margin-bottom: 52px;
    }
    &__item__wrap {
      width: 1180px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .dark-bg{
      display: flex;
      justify-content: center;
      padding-top:50px;
    }
  }
</style>
