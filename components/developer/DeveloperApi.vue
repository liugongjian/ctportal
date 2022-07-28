<template>
  <div class="openapi">
    <div class="openapi__container">
      <div class="title">Open API</div>
      <div class="openapi__item__wrap">
        <div class="openapi__item">
          <div class="openapi__item__img"><img :src="require('~/assets/mock/developer/api.png')" /></div>
          <div class="openapi__item__body">
            <div class="openapi__item__title">API文档</div>
            <div class="openapi__item__content">在线查看和搜索开放API对应的文档信息，教你快速掌握API的使用</div>
            <div class="openapi__item__button">
              <a class="el-button el-button--default light-btn" href="https://vcn.ctyun.cn/document/api/" target="_blank">查看文档</a>
            </div>
          </div>
        </div>
        <div class="openapi__item">
          <div class="openapi__item__img"><img :src="require('~/assets/mock/developer/api_explorer.png')" /></div>
          <div class="openapi__item__body">
            <div class="openapi__item__title">API Explorer</div>
            <div class="openapi__item__content">通过在线调试工具，快速调试API，查看API请求和返回结果</div>
            <div class="openapi__item__button">
              <a class="el-button el-button--default light-btn" href="https://vcn.ctyun.cn/apiexplorer" target="_blank">使用API Explorer</a>
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
      flex-direction: column;
      align-items: center;
      width: 35%;
      height: 440px;
      border: 1px solid rgba(240,240,242);
      border-radius: 20px;
      &__body{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__img {
        margin: 45px 0 32px 0;
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
        margin-top: 85px;
        .light-btn{
          border: 1px solid rgba(223,6,41,1);
          border-radius: 10px;
          font-size: 15px;
          color: #DF0629;
          font-weight: bold;
        }
      }
    }
  }
</style>
