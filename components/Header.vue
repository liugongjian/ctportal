<template>
  <div class="header">
    <div class="header__container">
      <div class="header__left">
        <div class="header__logo">
          <img src="~/assets/images/logo.svg" />
        </div>
        <div class="header__title">视频云</div>
      </div>
      <div class="header__right">
        <div class="header__navigation">
          <div class="header__navigation__item">产品</div>
          <div class="header__navigation__item">解决方案</div>
          <div class="header__navigation__item">AI 能力</div>
          <div class="header__navigation__item">开发者</div>
          <div class="header__navigation__item">文档</div>
          <div class="header__navigation__item">支持与服务</div>
          <div class="header__navigation__item">控制台</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    background: $darkBg;
    &__container {
      width: $baseWidth;
      margin: 0 auto;
      height: 80px;
      display: flex;
      align-items: center;
    }
    &__left {
      display: flex;
      align-items: center;
    }
    &__right {
      flex: 1;
    }
    &__logo {
      width: 140px;
      border-right: 1px solid #777;
      margin-right: 20px;
      padding-right: 20px;
    }
    &__title {
      color: #fff;
      font-size: 20px;
    }
    &__navigation {
      display: flex;
      justify-content: flex-end;
      &__item {
        color: #fff;
        font-size: 16px;
        margin-right: 50px;
      }
    }
  }
</style>
