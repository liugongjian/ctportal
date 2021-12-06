<template>
  <div class="openapi">
    <div class="openapi__container">
      <div class="openapi__title">Open API</div>
      <div class="openapi__item__wrap">
        <div class="openapi__item">
          <div class="openapi__item__img"><img src="~/assets/mock/openapi_1.svg" /></div>
          <div class="openapi__item__body">
            <div class="openapi__item__title">API文档</div>
            <div class="openapi__item__content">在线查看和搜索开放API对应的文档信息，教你快速掌握API的使用</div>
            <div class="openapi__item__button">
              <a class="el-button light-btn el-button--default light-btn" href="https://vcn.ctyun.cn/document/api/" target="_blank">查看文档</a>
            </div>
          </div>
        </div>
        <div class="openapi__item">
          <div class="openapi__item__img"><img src="~/assets/mock/openapi_2.svg" /></div>
          <div class="openapi__item__body">
            <div class="openapi__item__title">API Explorer</div>
            <div class="openapi__item__content">通过在线调试工具，快速调试API，查看API请求和返回结果</div>
            <div class="openapi__item__button">
              <a class="el-button light-btn el-button--default light-btn" href="https://vcn.ctyun.cn/apiexplorer" target="_blank">使用API Explorer</a>
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
