<template>
  <div class="slider">
    <div class="slider__item slider__item--1">
      <div class="slider__item__container">
        <div class="slider__item__left">
          <div class="slider__item__title">AI能力的深度应用</div>
          <div class="slider__item__content">
            随着深度学习，大规模数据处理能力及云基础设施的迅猛发展的背景下，AI算法的成熟让监控安防的智能化成为可能。随着场景的不断丰富和应用的不断深入，更多成熟可用的视频算法可以融入到各行业的生产流程中，赋予行业先进生产力。
          </div>
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
