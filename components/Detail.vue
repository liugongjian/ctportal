<template>
  <div class="architect__wrapper">
    <div class="architect__title">方案架构</div>
    <div class="architect__content">
      <div class="architect__content__pic"><img :src="picName"/></div>
      <div class="architect__content__desc">
        <div class="architect__content__desc__title">方案介绍</div>
        <div class="architect__content__desc__detail">{{introDetail}}</div>
        <div class="architect__content__desc__title">架构特点</div>
        <div class="architect__content__desc__detail">
          <div :key="index" v-for="(item,index) in feature">- {{item}}</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component} from 'vue-property-decorator'


@Component
export default class extends Vue{
  @Prop() private introDetail!: string
  @Prop() private feature!: any
  @Prop() private picName!: string
}
</script>


<style lang="scss" scoped>
.architect__wrapper{
    max-width: 1360px;
    min-width: 1100px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    color: #333333;
    padding-top: 70px;
    padding-bottom: 70px;
  .architect__title{
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
  }
  .architect__content{
    display: flex;
    &__pic{
      flex: 6;
      &>img{
        max-width: 800px;
        min-width: 500px;
      }
    }
    &__desc{
      flex: 3;
      &__title{
        font-size: 24px;
        font-weight: bold;
        margin: 30px 0 20px 0;
      }
      &__detail{
        line-height: 30px;
      }
    }
  }
}
</style>
