<template>
  <div class="openapi">
    <div class="openapi__container">
      <div class="openapi__title">Open API</div>
      <div class="openapi__item__wrap">
        <div class="openapi__item">
          <div class="openapi__item__img"><img src="~/assets/mock/openapi_1.svg" /></div>
          <div class="openapi__item__body">
            <div class="openapi__item__title">API文档</div>
            <div class="openapi__item__content">在线查看和搜索开放API对应的文档信息，教你快速掌握API 的使用</div>
            <div class="openapi__item__button">
              <el-button class="light-btn">查看文档</el-button>
            </div>
          </div>
        </div>
        <div class="openapi__item">
          <div class="openapi__item__img"><img src="~/assets/mock/openapi_2.svg" /></div>
          <div class="openapi__item__body">
            <div class="openapi__item__title">API Explorer</div>
            <div class="openapi__item__content">在线查看和搜索开放API对应的文档信息，教你快速掌握API 的使用</div>
            <div class="openapi__item__button">
              <el-button class="light-btn">查看文档</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .openapi {
    &__container {
      @include container;
      @include containerPadding;
      padding-bottom: 20px;
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
      width: 35%;
      height: 200px;
      &__img {
        margin-right: 30px;
        img {
          width: 100px;
        }
      }
      &__title {
        font-size: 24px;
        font-weight: bold;
        margin: 0 0 10px 0;
      }
      &__content {
        line-height: $baseLineHeight;
      }
      &__button {
        margin-top: 15px;
      }
    }
  }
</style>
