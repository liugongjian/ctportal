<template>
  <div class="sdk dark-bg">
    <div class="sdk__container">
      <div class="title">SDK</div>
      <div class="sdk__item__wrap">
        <div class="sdk__item">
          <div class="sdk__item__bg">
            <div class="sdk__item__img"><img :src="require('~/assets/mock/developer/java_icon.png')" /></div>
            <div class="sdk__item__body">
              <div class="sdk__item__title">Java SDK</div>
              <div>
                <div class="sdk__item__button">
                  <a class="el-button light-btn el-button--default" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-java-sdk-vss-0.0.2.zip" target="_blank">SDK文档</a>
                </div>
                <div class="sdk__item__button">
                  <a class="el-button light-btn el-button--default" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-java-sdk-vss-0.0.2.zip" target="_blank">SDK下载</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sdk__item">
          <div class="sdk__item__bg">
            <div class="sdk__item__img"><img :src="require('~/assets/mock/developer/python_icon.png')" /></div>
            <div class="sdk__item__body">
              <div class="sdk__item__title">Python SDK</div>
              <div>
                <div class="sdk__item__button">
                  <a class="el-button light-btn el-button--default" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-python-sdk-vss-0.0.2.zip" target="_blank">SDK文档</a>
                </div>
                <div class="sdk__item__button">
                  <a class="el-button light-btn el-button--default" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-java-sdk-vss-0.0.2.zip" target="_blank">SDK下载</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sdk__item">
          <div class="sdk__item__bg">
            <div class="sdk__item__img"><img :src="require('~/assets/mock/developer/go_icon.png')" /></div>
            <div class="sdk__item__body">
              <div class="sdk__item__title">GO SDK</div>
              <div>
                <div class="sdk__item__button">
                  <a class="el-button light-btn el-button--default" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-go-sdk-vss-0.0.2.zip" target="_blank">SDK文档</a>
                </div>
                <div class="sdk__item__button">
                  <a class="el-button light-btn el-button--default" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-java-sdk-vss-0.0.2.zip" target="_blank">SDK下载</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sdk__item">
          <div class="sdk__item__bg">
            <div class="sdk__item__img"><img :src="require('~/assets/mock/developer/node_icon.png')" /></div>
            <div class="sdk__item__body">
              <div class="sdk__item__title">Node.js SDK</div>
              <div>
                <div class="sdk__item__button">
                  <a class="el-button light-btn el-button--default" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-java-sdk-vss-0.0.2.zip" target="_blank">SDK文档</a>
                </div>
                <div class="sdk__item__button">
                  <a class="el-button light-btn el-button--default" href="https://vss.guiyang.vcn.ctyun.cn/sdk/ctyun-java-sdk-vss-0.0.2.zip" target="_blank">SDK下载</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .sdk {
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
      width: 570px;
      height: 185px;
      margin-bottom: 2%;
      box-shadow: 0px 2px 4px 0px rgba(255,223,223,0.5);
      border-radius: 20px;
      border: none;
      clip-path: inset(0 round 20px);
      background-image: linear-gradient(90deg, rgba(223,6,41,0.28), rgba(255,255,255,0));
      &__bg{
        background-image: linear-gradient(90deg, rgba(255,255,255,1), rgba(247,242,245,0.7), rgba(255,255,255,1));
        width: calc(100% - 3px);
        height: calc(100% - 4px);
        border-radius: 20px;
        margin-left: 3px;
        display: flex;
        align-items: center;
        padding-left: 51px;
      }
      &__body{
        font-size: 24px;
        color: #262729;
      }
      &__img {
        margin-right: 50px;
        img {
          width: 120px;
          height: 120px;
        }
      }
      &__title {
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 10px 0;
      }
      &__button {
        display: inline-block;
        margin: 15px 53px 0 0;
        .light-btn {
          border: 1px solid #DF0629;
          width: 108px;
          height: 38px;
          padding: 8px 10px;
          border-radius: 10px;
          font-size: 15px;
          color: #DF0629;
        }
      }
    }
  }
</style>
