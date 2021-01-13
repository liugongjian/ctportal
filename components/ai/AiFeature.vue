<template>
  <div class="feature">
    <div class="feature__container">
      <div class="feature__title">功能介绍</div>
      <div class="feature__item__wrap">
        <div class="feature__item">
          <div class="feature__item__img"><img src="~/assets/mock/ai_feat_1.svg" /></div>
          <div class="feature__item__body">
            <div class="feature__item__title">人脸检测定位</div>
            <div class="feature__item__content">检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸</div>
          </div>
        </div>
        <div class="feature__item">
          <div class="feature__item__img"><img src="~/assets/mock/ai_feat_2.svg" /></div>
          <div class="feature__item__body">
            <div class="feature__item__title">人脸属性分析</div>
            <div class="feature__item__content">准确识别多种人脸属性信息，包括年龄、性别、颜值、表情、情绪、脸型、头部姿态、是否闭眼、是否配戴眼镜、人脸质量信息及类型等</div>
          </div>
        </div>
        <div class="feature__item">
          <div class="feature__item__img"><img src="~/assets/mock/ai_feat_3.svg" /></div>
          <div class="feature__item__body">
            <div class="feature__item__title">情绪识别</div>
            <div class="feature__item__content">分析检测到的人脸的情绪，并返回置信度分数，目前可识别愤怒、厌恶、恐惧、高兴、伤心、惊讶、嘟嘴、鬼脸、无情绪等9种情绪</div>
          </div>
        </div>
        <div class="feature__item">
          <div class="feature__item__img"><img src="~/assets/mock/ai_feat_4.svg" /></div>
          <div class="feature__item__body">
            <div class="feature__item__title">在线图片活体检测</div>
            <div class="feature__item__content">基于单张图片中人像的破绽（摩尔纹、成像畸形等），判断图片是否为二次翻拍，过滤检测中不符合标准的人脸</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .feature {
    &__container {
      @include container;
      @include containerPadding;
      padding-bottom: 20px;
    }
    &__title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 80px;
    }
    &__item__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &__item {
      display: flex;
      width: 40%;
      height: 200px;
      &__img {
        margin-right: 30px;
        img {
          width: 80px;
        }
      }
      &__title {
        font-size: 24px;
        font-weight: bold;
        margin: 0 0 10px 0;
      }
    }
  }
</style>
