<template>
  <div class="slider">
    <div class="slider__item slider__item--1">
      <div class="slider__item__container">
        <div class="slider__item__left">
          <div class="slider__item__title">支持与服务</div>
          <div class="slider__item__content">
            多样化的支持计划和专家服务，满足您从上云部署、日常运维到优化升级等的全周期需求，让您的数字化转型之路更加高效敏捷。
          </div>
          <el-button class="slider__item__btn light-btn">售前咨询</el-button>
          <el-button class="slider__item__btn light-btn">售后咨询</el-button>
        </div>
        <div class="slider__item__right">
          <img class="slider__item__img" src="~/assets/mock/service_slider.svg" />
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
      background: linear-gradient(90deg, #152a3c 0%, #2485de 100%);
      color: #fff;
      .slider__item__container {
        color: #fff;
      }
      .slider__item__content {
        color: #eee;
      }
      .slider__item__img {
        padding: 30px;
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
