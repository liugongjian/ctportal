<template>
  <div class="slider">
    <div class="slider__item slider__item--1">
      <div class="slider__item__container">
        <div class="slider__item__left">
          <div class="slider__item__title">{{title}}</div>
          <div class="slider__item__content">
            {{desc}}
          </div>
          <el-button type="primary">{{btnDesc}}</el-button>
        </div>
        <div class="slider__item__right">
          <img class="slider__item__img" :src="picSrc"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Prop, Component} from 'vue-property-decorator'


@Component
export default class extends Vue{
  @Prop() private title!: string
  @Prop() private desc!: string
  @Prop() private picSrc!: string
  @Prop() private btnDesc!: string
  @Prop() private btnSrc!: string
}
</script>


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
      display: block;
    }

    &--1 {
      background: #212126;
      color: #fff;
      .slider__item__container {
        color: #fff;
      }
      .slider__item__content {
        color: #fff;
      }
      .slider__item__btn {
        border-color: $primary;
        color: #fff;
        &:hover {
          border-color: $primary;
          color: $primary;
        }
      }
    }
  }
</style>
