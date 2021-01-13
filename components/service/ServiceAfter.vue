<template>
  <div class="after">
    <div class="after__container">
      <div class="after__title">售后咨询</div>
      <div class="after__item__wrap">
        <div class="after__item">
          <div class="after__item__img"><img src="~/assets/mock/service_after_1.svg" /></div>
          <div class="after__item__body">
            <div class="after__item__title">自助服务</div>
            <div class="after__item__content">为您提供多种便捷工具及常见问题指南，让您轻松使用视频云产品与服务！</div>
            <div class="after__item__button">
              <el-button class="light-btn">查看详情</el-button>
            </div>
          </div>
        </div>
        <div class="after__item">
          <div class="after__item__img"><img src="~/assets/mock/service_after_2.svg" /></div>
          <div class="after__item__body">
            <div class="after__item__title">工单</div>
            <div class="after__item__content">产品及技术问题，您可以登录提交 工单，将有专业的技术人员为您快 速解答</div>
            <div class="after__item__button">
              <el-button class="light-btn">查看详情</el-button>
            </div>
          </div>
        </div>
        <div class="after__item">
          <div class="after__item__img"><img src="~/assets/mock/service_after_3.svg" /></div>
          <div class="after__item__body">
            <div class="after__item__title">智能客服</div>
            <div class="after__item__content">智能诊断，精准定位，快速应答， 为您提供更加快捷的服务！</div>
            <div class="after__item__button">
              <el-button class="light-btn">查看详情</el-button>
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
      width: 30%;
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
