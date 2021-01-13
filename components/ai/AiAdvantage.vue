<template>
  <div class="advantage">
    <div class="advantage__container">
      <div class="advantage__title">核心优势</div>
      <div class="advantage__item__wrap">
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/mock/home_feat_1.svg" /></div>
          <div class="advantage__item__title">多维感知，全面互联</div>
          <div class="advantage__item__content">感知、读懂“人、车、物以及环境”多维数据，通过AI嵌入“云-边-端”的智能协同，打破子系统数据孤岛，实现全面互联</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/mock/home_feat_2.svg" /></div>
          <div class="advantage__item__title">服务稳定高效</div>
          <div class="advantage__item__content">以“AI算法”为核心，整合“感知、计算和存储”AIoT智能硬件，衔接“云端软件”管理平台，构建软硬一体化智能安防屏障</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/mock/home_feat_3.svg" /></div>
          <div class="advantage__item__title">灵活简单易用</div>
          <div class="advantage__item__content">全场景“一脸通”，将“智慧通行、智能安防、餐饮消费和会员服务”等环节打通，开放合作生态，共同提质创收</div>
        </div>
        <div class="advantage__item">
          <div class="advantage__item__img"><img src="~/assets/mock/home_feat_4.svg" /></div>
          <div class="advantage__item__title">效率为先，降本增效</div>
          <div class="advantage__item__content">从提升园区“管理和服务”效率出发，依据实际业务需求，提供“灵活部署”的针对性方案，降本增效</div>
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
      &__img {
        height: 200px;
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
    }
  }
</style>
