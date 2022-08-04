<template>
  <div class="ai">
    <div class="ai__container">
      <div class="ai__title">AI能力的深度应用</div>
      <div class="ai__right">
        <div class="ai__intro">
          大规模数据处理能力及云基础设施的迅猛发展的背景下，AI算法的成熟让监控安防的智能化成为可能。随着场景的不断丰富和应用的不断深入，更多成熟可用的视频算法可以融入到各行业的生产流程中，赋予行业先进生产力
        </div>
        <div class="list-wrapper-multiple-line">
          <list-item v-for="item in list" :item="item" :key="item.src"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ListItem from '../ListItem.vue'

export default Vue.extend({
  components: { ListItem },
  data(){
    return {
      list: [
        { src: require('~/assets/mock/ai/face.png'), url: 'face', title:'人脸识别', content:'通过比对人脸库中的照片，进行1:N比对，基于输出的符合质量标准的图片，返回被识别的人员信息。' },
        { src: require('~/assets/mock/ai/mask.png'), url: 'mask', title:'口罩检测', content:'通过人脸和人体分析的方式检测用户是否佩戴口罩。' },
        { src: require('~/assets/mock/ai/passenger.png'), url: 'passenger', title:'行人检测', content:'适用于3米以上的中远距离俯拍，以人体为识别目标统计画面中的瞬时人数。' },
        { src: require('~/assets/mock/ai/dangerzone.png'), url: 'dangerzone', title:'危险区域检测', content:'对危险监控区域内的人员靠近行为进行识别。' },
        { src: require('~/assets/mock/ai/body.png'), url: 'body', title:'人体属性检测', content:'检测图像中的所有人体，识别多种属性信息，包含性别年龄、服饰类别、服饰颜色等。' },
        { src: require('~/assets/mock/ai/smoke.png'), url: 'smoke', title:'吸烟检测', content:'检测画面中的人员是否有吸烟行为，包括手中拿烟、嘴上叼烟。' }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
.ai {
  background: #F8F9FB;
  &__container {
    @include container;
    @include containerPadding;
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 26px;
    font-family: PingFangSC-Medium;
    margin-right: 110px;
    margin-bottom: 20px;
    text-align: center;
  }
  &__right {
    flex: 1;
  }
  &__intro {
    font-size: 12px;
    font-family: PingFangSC-Medium;
    line-height: $baseLineHeight;
    margin-bottom: 94px;
  }
  &__gallery {
    display: flex;
    flex-wrap: wrap;
    &__item {
      position: relative;
      flex: 0 0 32%;
      height: 250px;
      padding: 15px 0;
      text-align: center;
      max-width: 32%;
      margin-right: 1%;
      margin-bottom: 1%;
      cursor: pointer;
      background: #f7f7f7;
      border: 1px solid #eee;
      border-radius: 10px;
      overflow: hidden;
      &__img {
        height: 100%;
      }
      &__title {
        position: absolute;
        z-index: 2;
        top: 25px;
        left: 0;
        padding: 5px 30px;
        background: rgba(0, 0, 0, 0.55);
        font-size: 16px;
        color: #fff;
      }
      &__intro {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        padding: 0 30px;
        color: #fff;
        text-align: left;
        background: rgba(0, 0, 0, 0.70);
        opacity: 0;
        transition: opacity 100ms;
        &__title {
          font-size: 16px;
          margin: 30px 0 15px 0;
        }
      }
      &:hover {
        .ai__gallery__item__intro {
          opacity: 1;
        }
      }
    }
  }
}
</style>
