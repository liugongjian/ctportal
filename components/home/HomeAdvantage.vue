<template>
  <div class="advantage">
    <div class="advantage__container">
      <div class="advantage__title">产品优势</div>
      <div class="advantage__item__wrap">
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/images/feature/feature1.png" /></div>
          <div class="advantage__item__title">快速接入</div>
          <div class="advantage__item__content">基于云原生架构部署、按需扩容，可支持百万级设备接入。兼容主流视频终端设备，支持GB28181、GAT1400、RTMP、RTSP等协议直接接入，启动快、成本低。</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/images/feature/feature2.png" /></div>
          <div class="advantage__item__title">云网融合</div>
          <div class="advantage__item__content">“云-网-边”融合架构，用户就近接入，秒级响应。支持公有云、私有云、混合云多种形态部署，覆盖多种行业应用场景。</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/images/feature/feature3.png" /></div>
          <div class="advantage__item__title">智能生态</div>
          <div class="advantage__item__content">支持AI算法仓库统一管理，GPU算力智能调度，AI算法统一编排。人脸/人体/车辆/物体/环境等算法全场景覆盖。</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/images/feature/feature4.png" /></div>
          <div class="advantage__item__title">数据资产</div>
          <div class="advantage__item__content">设备数据智能分析，挖掘潜在风险，防患于未然。积累数据资产，人脸库、车辆库等数据资产赋能行业应用。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .advantage {
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
    }
    &__item {
      margin: 0 35px;
      width: 25%;
      &__img {
        height: 130px;
        text-align: center;
        img {
          height: 100%;
        }
      }
      &__title {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin: 30px 0 20px 0;
      }
      &__content {
        text-align: justify;
      }
    }
  }
</style>
