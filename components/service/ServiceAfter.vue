<template>
  <div class="after">
    <div class="after__container">
      <div class="after__item__wrap">
        <div class="after__item">
          <div class="after__item__body">
            <div class="after__item__body__wrap">
              <div class="after__item__title">售前咨询</div>
              <div class="after__item__content">这里有专业的技术构架师，为您提供专业咨询，助您轻松上云！</div>
            </div>
            <div class="after__item__button">
              <a class="el-button light-btn el-button--default" href="./questionnaire/" target="_blank">立即预约</a>
            </div>
          </div>
          <div class="seperator" />
          <div class="after__item__body">
            <div class="after__item__body__wrap">
              <div class="after__item__title">售后咨询</div>
              <div class="after__item__content longer">产品及技术问题，您可以登录提交工单，将有专业的技术人员为您快速解答！</div>
            </div>
            <div class="after__item__button">
              <a class="el-button light-btn el-button--default" href="./questionnaire/" target="_blank">查看详情</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .after {
    background: #f1f1f1 url('../../assets/images/grey_bg.png') no-repeat;
    &__container {
      @include container;
      @include containerPadding;
    }
    &__title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 80px;
    }
    &__item__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      position: relative;
    }
    &__item {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 1180px;
      height: 220px;
      background: url('/_nuxt/assets/mock/service/service_bg.png') no-repeat;
      background-size: 100% 100%;
      border-radius: 4px;
      box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.1);
      &__body{
        margin-left: 105px;
        display: flex;
        &__wrap{
          margin-right: 27px;
        }
      }

      &__img {
        margin-right: 30px;
        img {
          width: 80px;
          height: 80px;
        }
      }
      &__title {
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 10px 0;
      }
      &__content {
        line-height: $baseLineHeight;
        margin: 0 0 10px 0;
        width: 200px;
      }
      &__button{
        display: flex;
        align-items: center;
        .light-btn{
          border: none;
          color: #fff;
          background: #DF0629;
        }
      }
      .longer{
        width: 252px;
      }
    }
  }
  .seperator{
    width: 1px;
    height: 148px;
    background: #E1E2E6;
    position: absolute;
    left: 50%;
    top: 39px;
  }
</style>
