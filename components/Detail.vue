<template>
<div class="dark-bg">
  <div class="architect__wrapper">
    <div class="title">方案架构</div>
        <div class="solution__item__wrap__desc">
          <div class="solution__item__wrap__desc__img">
            <!-- <img v-if="picName" :src="picName" /> -->
            <svg-icon width="588" height="650" v-if="picName" :name="picName"/>
          </div>
          <div>
            <div class="solution__item__wrap__desc__content">
              <div class="solution__item__wrap__desc__content__title">
                方案介绍:
              </div>
              <div class="solution__item__wrap__desc__content__detail">
                {{ introDetail }}
              </div>
              <div class="seperator"/>
              <div class="solution__item__wrap__desc__content__title">架构特点:</div>
              <ul class="solution__item__wrap__desc__content__list">
                <li v-for="(item,index) in feature" :key="index">{{item}}</li>
              </ul>
              <div class="seperator"/>
            </div>
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
.dark-bg {
  background: url('../assets/mock/solution/feature_bg.png') no-repeat;
  background-size: cover;
}
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
      .solution__item__wrap__desc {
        height: 700px;
        margin-top: 20px;
        background: #FFFFFF;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.1);
        border-radius: 4px;
        display: flex;
        justify-content: space-around;
        &__img{
          width: 600px;
          height: 650px;
          background: #f5f5f5;
          margin: auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            width: 98%;

          }
          .svg-icon{
            width: 98%;
          }
        }
        &__feature{
          margin: 28px 0 0 32px;
          .tag{
            color: #828282;
            font-size: 14px;
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            width: 110px;
            margin-right: 55px;
          }
          .tag::after{
            content: '';
            display: inline-block;
            width: 1px;
            height: 33px;
            background: #828282;
          }
          .tag:last-child::after{
            display: none;
          }
        }
        &__content{
          width: 570px;
          height: 375px;
          margin-left: 32px;
          &__title{
            font-size: 16px;
            font-weight: bold;
            margin: 40px 0 30px 0;
            color: #181818;
          }
          &__tag{
            .el-tag{
              margin-right: 2%;
            }
          }
          &__detail{
            margin-top: 16px;
            margin-bottom: 44px;
            font-size: 14px;
            color: #67696B;
            font-weight: 500;
          }
          &__list {
            margin: 10px 0 44px 0;
            padding-left: 20px;
            li {
              font-size: 14px;
              color: #67696B;
              margin-bottom: 20px;
              list-style-image:url('../assets/mock/solution/tick.png');
            }
          }
        }
        .detail{
          font-size: 14px;
          color: #DF0629;
          margin-top: 28px;
        }
      }
}
.seperator{
  width: 100%;
  height: 1px;
  background: #ddd;
}
</style>
