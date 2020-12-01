<template>
  <div class="slider">
    <div class="slider__item slider__item--1">
      <div class="slider__item__container">
        <div class="slider__item__left">
          <div class="slider__item__title">抢先体验视频监控AI能力</div>
          <div class="slider__item__content">
            机器视觉是智能世界的眼睛，万物感知入口，行业数字化抓手。天翼云视频监控面向智慧城市、社区、乡村等提供极简部署、普惠AI、智能业务闭环的监控解决方案。
          </div>
          <el-button class="slider__item__btn light-btn">立即体验</el-button>
        </div>
        <div class="slider__item__right">
          <img class="slider__item__img" src="~/assets/mock/home_slider.png" />
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
      flex: 6;
      align-self: center;
    }
    &__right {
      flex: 5;
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
    }

    &--1 {
      background: #212126;
      color: #fff;
      .slider__item__container {
        color: #fff;
      }
      .slider__item__content {
        color: #9A9A9A;
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
