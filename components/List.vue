<template>
  <div class="section light-bg" ref="face">
    <div class="title">
      应用场景
    </div>
    <div v-if="isEven" class="list-wrapper-single-line">
      <list-item-3 v-for="item in list" :item="item" :key="item.src"/>
    </div>
    <div v-else class="list-wrapper-single-line">
      <list-item v-for="item in list" :item="item" :key="item.src"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component} from 'vue-property-decorator'


@Component
export default class extends Vue{
  @Prop() private isEven!: boolean
  @Prop() private title!: string
  @Prop() private list!: any
}
</script>

<style lang="scss" scoped>
  .list {
    &.even {
      background: #f1f1f1;
    }
    &__container {
      @include container;
      @include containerPadding;
    }
    &__title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 50px;
    }
    &__item__wrap {
      display: flex;
      justify-content: space-around;
    }
    &__item {
      width: 250px;
      margin: 0 35px;
      &__img {
        height: 250px;
        width: 250px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          height: 80%;
        }
      }
      &__title {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin: 20px 0 20px 0;
      }
      &__content {
        text-align: justify;
      }
    }
  }
</style>
