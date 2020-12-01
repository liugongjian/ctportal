<template>
  <div class="advantage">
    <div class="advantage__container">
      <div class="advantage__title">产品优势</div>
      <div class="advantage__item__wrap">
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/mock/home_feat_1.svg" /></div>
          <div class="advantage__item__title">多前端接入，极简接入</div>
          <div class="advantage__item__content">支持通过标准协议接入摄像头、NVR/DVR、监控平台等多种前端，简单调试即可使用</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/mock/home_feat_2.svg" /></div>
          <div class="advantage__item__title">边缘节点智能分析</div>
          <div class="advantage__item__content">将数据处理能力下沉到边缘节点，满足行业数字化在实时业务、敏捷连接、数据优化等方面的关键需求，使用户得到了更加极致的体验</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/mock/home_feat_3.svg" /></div>
          <div class="advantage__item__title">功能丰富、实用性强</div>
          <div class="advantage__item__content">事前及时预警，防患于未然；事中实时告警，方便管理人员快速处理；事后信息存档，便于查证和决策分析</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/mock/home_feat_4.svg" /></div>
          <div class="advantage__item__title">海量算法库，自由组合</div>
          <div class="advantage__item__content">支持数百种算法，且可根据具体场景优化算法效果，可广泛应用在 工业园区、生产制造企业、住宅小区、校园、景区、工地等多种场景</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .advantage {
    background: #f1f1f1;
    &__container {
      @include container;
      padding: $containerPadding;
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
      &__img {
        height: 200px;
        text-align: center;
        img {
          height: 100%;
        }
      }
      &__title {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        margin: 30px 0 20px 0;
      }
    }
  }
</style>
