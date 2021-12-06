<template>
  <div class="sdk">
    <div class="sdk__container">
      <div class="sdk__title">SDK</div>
      <div class="sdk__item__wrap">
        <div class="sdk__item">
          <div class="sdk__item__img"><img src="~/assets/images/sdk_java.svg" /></div>
          <div class="sdk__item__body">
            <div class="sdk__item__title">Java SDK</div>
            <div class="sdk__item__button">
              <a class="el-button light-btn el-button--default light-btn" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-java-sdk-vss-0.0.2.zip" target="_blank">SDK下载</a>
            </div>
          </div>
        </div>
        <div class="sdk__item">
          <div class="sdk__item__img"><img src="~/assets/images/sdk_python.svg" /></div>
          <div class="sdk__item__body">
            <div class="sdk__item__title">Python SDK</div>
            <div class="sdk__item__button">
              <a class="el-button light-btn el-button--default light-btn" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-python-sdk-vss-0.0.2.zip" target="_blank">SDK下载</a>
            </div>
          </div>
        </div>
        <div class="sdk__item">
          <div class="sdk__item__img"><img src="~/assets/images/sdk_go.svg" /></div>
          <div class="sdk__item__body">
            <div class="sdk__item__title">GO SDK</div>
            <div class="sdk__item__button">
              <a class="el-button light-btn el-button--default light-btn" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-go-sdk-vss-0.0.2.zip" target="_blank">SDK下载</a>
            </div>
          </div>
        </div>
        <div class="sdk__item">
          <div class="sdk__item__img"><img src="~/assets/images/sdk_node.svg" /></div>
          <div class="sdk__item__body">
            <div class="sdk__item__title">Node.js SDK</div>
            <div class="sdk__item__button">
              敬请期待
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .sdk {
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
      width: 48%;
      margin-bottom: 2%;
      padding: 30px 40px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.1);

      &__img {
        margin-right: 50px;
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
      &__button {
        margin-top: 15px;
        .light-btn {
          padding: 8px 10px;
        }
      }
    }
  }
</style>
