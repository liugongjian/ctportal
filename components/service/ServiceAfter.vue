<template>
  <div class="after">
    <div class="after__container">
      <div class="after__item__wrap">
        <div class="after__item">
          <div class="after__item__img"><img src="~/assets/mock/service_after_1.svg" /></div>
          <div class="after__item__body">
            <div class="after__item__title">售前咨询</div>
            <div class="after__item__content">为您提供专业的售前咨询，让您轻松使用视频云产品与服务！</div>
            <div class="after__item__button">
              <a class="el-button light-btn el-button--default" href="./questionnaire/" target="_blank">查看详情</a>
            </div>
          </div>
        </div>
        <div class="after__item">
          <div class="after__item__img"><img src="~/assets/mock/service_after_2.svg" /></div>
          <div class="after__item__body">
            <div class="after__item__title">工单</div>
            <div class="after__item__content">产品及技术问题，您可以登录提交工单，将有专业的技术人员为您快速解答。</div>
            <div class="after__item__button">
              <a class="el-button light-btn el-button--default" href="https://www.ctyun.cn/h5/wsc/worksheet/submit/10011360" target="_blank">查看详情</a>
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
    }
    &__item {
      display: flex;
      align-items: center;
      width: 40%;
      padding: 20px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.1);

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
      }
      &__button {
        margin-top: 15px;
        .light-btn {
          padding: 8px 10px;
        }
      }
    }
  }
</style>
