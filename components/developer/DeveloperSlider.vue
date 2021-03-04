<template>
  <div class="slider">
    <div class="slider__item slider__item--1">
      <div class="slider__item__container">
        <div class="slider__item__left">
          <div class="slider__item__title">开发者</div>
          <div class="slider__item__content">
            为开发者提供API、SDK、CLI等工具，方便快捷调用天翼云视频监控开放能力
          </div>
          <a class="slider__item__btn light-btn" href="/document/api/" target="_blank">API文档</a>
        </div>
        <div class="slider__item__right">
          <img class="slider__item__img" src="~/assets/mock/dev_slider.svg" />
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
