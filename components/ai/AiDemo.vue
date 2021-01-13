<template>
  <div class="demo">
    <div class="demo__container">
      <div class="demo__title">功能演示</div>
      <div class="demo__wrap">
        <div class="demo__left">
          <div class="demo__img"><img src="~/assets/mock/ai_demo.png" /></div>
          <div class="demo__gallery">
            <div class="demo__gallery__item">
              <img src="~/assets/mock/ai_demo_1.png" />
            </div>
            <div class="demo__gallery__item">
              <img src="~/assets/mock/ai_demo_2.png" />
            </div>
            <div class="demo__gallery__item">
              <img src="~/assets/mock/ai_demo_3.png" />
            </div>
            <div class="demo__gallery__item">
              <img src="~/assets/mock/ai_demo_4.png" />
            </div>
            <div class="demo__gallery__item">
              <img src="~/assets/mock/ai_demo_5.png" />
            </div>
          </div>
        </div>
        <div class="demo__right">
          <div class="demo__analysis">
            <div class="demo__analysis__face"><img src="~/assets/mock/ai_demo_face.png" /></div>
            <div class="demo__analysis__detail">
              <ul>
                <li>年龄: 23岁</li>
                <li>性别: 女性</li>
                <li>种族: 黄种人</li>
                <li>颜值: 55</li>
                <li>表情: 微笑</li>
                <li>眼镜: 无眼镜</li>
                <li>情绪: 愤怒</li>
                <li>戴口罩: 有</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .demo {
    background: #f1f1f1 url('../../assets/images/grey_bg.png') no-repeat;
    background-size: cover;
    &__container {
      @include container;
      @include containerPadding;
    }
    &__title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 80px;
    }
    &__wrap {
      display: flex;
    }
    &__left {
      flex: 6;
    }
    &__right {
      flex: 4;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #3b393c;
    }
    &__img img {
      display: block;
    }
    &__gallery {
      display: flex;
      justify-content: space-around;
      background: #fff;
      padding: 12px 0;
      img {
        display: block;
      }
    }
    &__analysis {
      display: flex;
      align-items: center;
      &__detail {
        color: #fff;
        ul {
          list-style: none;
          li {
            margin: 10px 0;
          }
        }
      }
    }
  }
</style>
