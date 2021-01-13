<template>
  <div class="slider">
    <div class="slider__item slider__item--1">
      <div class="slider__item__container">
        <div class="slider__item__left">
          <div class="slider__item__title">人脸检测</div>
          <div class="slider__item__content">
            快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息
          </div>
          <el-button class="slider__item__btn light-btn">技术文档</el-button>
        </div>
        <div class="slider__item__right">
          <img class="slider__item__img" src="~/assets/mock/ai_slider.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .slider__item {
    &__container {
      @include container;
      display: flex;
    }
    &__left {
      flex: 5;
      align-self: center;
    }
    &__right {
      flex: 7;
    }
    &__title {
      font-size: 40px;
    }
    &__content {
      font-size: 16px;
      margin: 35px 0;
      line-height: $baseLineHeight;
    }
    &__img {
      width: 100%;
      display: block;
    }

    &--1 {
      background: #1c1c3e;
      color: #fff;
      .slider__item__container {
        color: #fff;
      }
      .slider__item__content {
        color: #eee;
      }
      .slider__item__btn {
        border-color: #fff;
        color: #fff;
        &:hover {
          border-color: $primary;
          color: $primary;
        }
      }
    }
  }
</style>
