<template>
  <div class="ai">
    <div class="ai__container">
      <div class="ai__title">AI赋能行业应用</div>
      <div class="ai__right">
        <div class="ai__intro">
          各种协议视频流可无缝导入到 AI 算法分析，实现视频智能分析赋能行业应用。支持人脸检测、人体特征检测、车辆属性检测、烟火检测、安全区域检测等AI算法。
        </div>
        <div class="ai__gallery">
          <div class="ai__gallery__item" @click="goto('ai')">
            <img class="ai__gallery__item__img" src="~/assets/images/ai/10001.png" />
            <div class="ai__gallery__item__title">人脸比对</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                人脸比对
              </div>
              <div class="ai__gallery__item__intro__content">
                通过比对人脸库中的照片，进行1:N比对，得到人脸相似度并返回被识别的人员信息。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item" @click="goto('ai')">
            <img class="ai__gallery__item__img" src="~/assets/images/ai/10003.png" />
            <div class="ai__gallery__item__title">口罩检测</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                口罩检测
              </div>
              <div class="ai__gallery__item__intro__content">
                通过人脸和人体分析的方式检测用户是否佩戴口罩。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item" @click="goto('ai')">
            <img class="ai__gallery__item__img" src="~/assets/images/ai/10005.png" />
            <div class="ai__gallery__item__title">人员聚集</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                人员聚集
              </div>
              <div class="ai__gallery__item__intro__content">
                适用于3米以上的中远距离俯拍，以头部为识别目标统计图片中的瞬时人数。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item" @click="goto('ai')">
            <img class="ai__gallery__item__img" src="~/assets/images/ai/body_01.png" />
            <div class="ai__gallery__item__title">人体属性检测</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                人体属性检测
              </div>
              <div class="ai__gallery__item__intro__content">
                检测图像中的所有人体，识别20余类属性信息，包含性别年龄、服饰类别、服饰颜色等。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item" @click="goto('ai')">
            <img class="ai__gallery__item__img" src="~/assets/images/ai/10006.png" />
            <div class="ai__gallery__item__title">危险区域检测</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                危险区域检测
              </div>
              <div class="ai__gallery__item__intro__content">
                对危险监控区域内的人员靠近行为进行识别。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item" @click="goto('ai')">
            <img class="ai__gallery__item__img" src="~/assets/images/ai/10014.png" />
            <div class="ai__gallery__item__title">车牌识别</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                车牌识别
              </div>
              <div class="ai__gallery__item__intro__content">
                自动识别车辆车牌信息，应用于停车场、小区、工厂等场景，实现无卡、无人的车辆进出场自动化、规范化管理。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    goto(pageName) {
      this.$router.push(pageName)
    }
  }
})
</script>
<style lang="scss" scoped>
  .ai {
    &__container {
      @include container;
      @include containerPadding;
      display: flex;
      flex-direction: column;
    }
    &__title {
      font-size: 40px;
      // width: 160px;
      margin-right: 110px;
      margin-bottom: 50px;
      text-align: center;
    }
    &__right {
      flex: 1;
    }
    &__intro {
      font-size: 16px;
      line-height: $baseLineHeight;
      margin-bottom: 50px;
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
            font-weight: bold;
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
