<template>
  <div>
    <HomeAi ref="ai"/>
    <div class="section light-bg" ref="face">
      <div class="title">
        人脸识别
      </div>
      <div class="list-wrapper-single-line face">
        <list-item-3 v-for="item in faceList" :item="item" :key="item.src"/>
      </div>
    </div>
    <div class="pic-bg" ref="body">
      <div class="section">
        <div class="title">
          人体识别
        </div>
        <div class="list-wrapper-single-line">
          <list-item v-for="item in bodyList" :item="item" :key="item.src"/>
        </div>
      </div>
    </div>
    <div class="section light-bg" ref="senario">
      <div class="title">
        场景识别
      </div>
      <div class="list-wrapper-single-line">
        <list-item v-for="item in senarioList" :item="item" :key="item.src"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private faceList = [
      { src: require('~/assets/mock/ai/face1.png'), title:'人脸识别', content:'通过比对人脸库中的照片，进行1:N比对，基于输出的符合质量标准的图片，返回被识别的人员信息。' },
      { src: require('~/assets/mock/ai/mask1.png'), title:'口罩检测', content:'通过人脸和人体分析的方式检测用户是否佩戴口罩。' }
  ]
  private bodyList = [
      { src: require('~/assets/mock/ai/gathering.png'), title:'人员聚集', content:'适用于3米以上的中远距离俯拍，以头部为识别目标统计图片中的瞬时人数' },
      { src: require('~/assets/mock/ai/body.png'), title:'人体属性检测', content:'检测图像中的所有人体，识别多种属性信息，包含性别年龄、服饰类别、服饰颜色等。' },
      { src: require('~/assets/mock/ai/smoke.png'), title:'吸烟检测', content:'检测画面中的人员是否有吸烟行为，包括手中拿烟、嘴上叼烟。' },
      { src: require('~/assets/mock/ai/helmet.png'), title:'安全帽反光服检测', content:'检测画面中的人员是否佩戴安全帽、穿反光服，规范从业人员的作业行为。' },
  ]
  private senarioList = [
      { src: require('~/assets/mock/ai/dangerzone.png'), title:'危险区域检测', content:'对危险监控区域内的人员靠近行为进行识别。' },
      { src: require('~/assets/mock/ai/fire.png'), title:'烟雾明火检测', content:'对画面中的烟雾、明火进行识别，适用于楼宇、工厂、加油站等场景。' },
      { src: require('~/assets/mock/ai/plate.png'), title:'车牌识别', content:'自动识别车辆车牌信息，应用于停车场、小区、工厂等场景，实现无卡、无人的车辆进出场自动化、规范化管理。' }
  ]
}
</script>
<style lang="scss" scoped>
.pic-bg{
  background: #F8F9FB url('../../assets/mock/ai/sectionbg.png') no-repeat;
  background-size:100% 100%;
  width: 100% !important;
}
</style>

<style lang="scss" scoped>
.face{
  height: 220px;
  .list__item{
    height: 100%;
    margin: 0;
    margin-right: 18px;
  }
}
</style>
