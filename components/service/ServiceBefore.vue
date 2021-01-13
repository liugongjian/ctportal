<template>
  <div class="before">
    <div class="before__container">
      <div class="before__title">售前咨询</div>
      <div class="before__item__wrap">
        <div class="before__item">
          <div class="before__item__title">咨询热线</div>
          <div class="before__item__tel">400-0000-000</div>
          <div class="before__item__content">为您提供专业的售前购买咨询，让您快速了解云产品和需求，轻松选择！</div>
        </div>
        <div class="before__item">
          <div class="before__item__title">在线预约</div>
          <div class="before__item__content">这里有专业的技术构架师，为您提供专业解答，助您轻松上云！</div>
          <div class="before__item__button">
            <el-button class="light-btn" type="primary">立即预约</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .before {
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
      width: 46%;
      padding: 30px 40px;
      background: #fff;
      border-radius: 4px;
      border: 1px solid $borderGrey;
      box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.1);

      &__tel {
        font-size: 24px;
        color: $primary;
        margin-bottom: 20px;
      }
      &__title {
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 10px 0;
      }
      &__button {
        margin-top: 25px;
        .light-btn {
          padding: 8px 10px;
        }
      }
    }
  }
</style>
