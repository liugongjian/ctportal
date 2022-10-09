<template>
  <div class="slider" :style="backgroundStyle">
    <div class="slider__item slider__item--1">
      <div class="slider__item__container">
        <div class="slider__item__left">
          <div class="slider__item__title" :style="fontStyle">
            {{title}}
            <svg-icon v-if="iconColor" height="34" width="34" :color="iconColor" name="slider_play"></svg-icon>
          </div>
          <div class="slider__item__content" :style="fontStyle">
            {{desc}}
          </div>
          <a v-if="btnDesc" class="el-button el-button--primary" :href="btnSrc" target="_blank">
            {{btnDesc}}
          </a>
        </div>
        <div class="slider__item__right">
          <!-- <img class="slider__item__img" :src="require(`${picSrc}.png`)"/> -->
          <img v-if="picName" class="slider__item__img" :src="require('../assets/mock/' + picName + '.png')"/>
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
  @Prop() private picName!: string
  @Prop() private btnDesc!: string
  @Prop() private btnSrc!: string
  @Prop() private fontStyle!: Object
  @Prop() private backgroundStyle!: Object
  @Prop({ default: '#DF0629' }) private iconColor!: string
}
</script>


<style lang="scss" scoped>
.slider{
  height: 450px;
  .slider__item {
    &__container {
      @include container;
      height: 100%;
      display: flex;
    }
    &__left {
      width: 490px;
      margin-top: 78px;
      .el-button--primary{
        background: #DF0629;
        border: none;
        width: 120px;
        height: 44px;
        padding: 14px 20px !important;
      }
    }
    &__right {
      align-self: center;
    }
    &__title {
      font-size: 40px;
    }
    &__content {
      font-size: 16px;
      margin-top: 16px;
      margin-bottom: 86px;
      line-height: $baseLineHeight;
      text-align: justify;
    }
    &__img {
      width: 503px;
      height: 402px;
      margin-top: 51px;
      margin-left: 180px;
    }

    &--1 {
      height: 100%;
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
}
.play{
  width: 34px;
  height: 34px;
  color: #DF0629;
}
</style>
