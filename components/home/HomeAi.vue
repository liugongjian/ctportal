<template>
  <div class="ai">
    <div class="ai__container">
      <div class="ai__title">AI能力的深度应用</div>
      <div class="ai__right">
        <div class="ai__intro">
          随着深度学习、大规模数据处理能力及云基础设施的迅猛发展的背景下，AI算法的成熟让监控安防的智能化成为可能。随着场景的不断丰富和应用的不断深入，更多成熟可用的视频算法可以融入到各行业的生产流程中，赋予行业先进生产力。
        </div>
        <div class="ai__gallery">
          <div class="ai__gallery__item">
            <img class="ai__gallery__item__img" src="~/assets/mock/328909811.jpg" />
            <div class="ai__gallery__item__title">人脸搜索1:N</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                人脸搜索1:N
              </div>
              <div class="ai__gallery__item__intro__content">
                输入已获授权图片，从数据库的复数人脸中进行定向搜索的能力，最高支持百万级人脸数据库。适用人脸考勤、人脸打卡、人脸搜索、人脸通行等场景。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item">
            <img class="ai__gallery__item__img" src="~/assets/mock/310532962.jpg" />
            <div class="ai__gallery__item__title">家畜识别</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                家畜识别
              </div>
              <div class="ai__gallery__item__intro__content">
                输入已获授权图片，从数据库的复数人脸中进行定向搜索的能力，最高支持百万级人脸数据库。适用人脸考勤、人脸打卡、人脸搜索、人脸通行等场景。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item">
            <img class="ai__gallery__item__img" src="~/assets/mock/126679847.jpg" />
            <div class="ai__gallery__item__title">物流识别</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                物流识别
              </div>
              <div class="ai__gallery__item__intro__content">
                输入已获授权图片，从数据库的复数人脸中进行定向搜索的能力，最高支持百万级人脸数据库。适用人脸考勤、人脸打卡、人脸搜索、人脸通行等场景。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item">
            <img class="ai__gallery__item__img" src="~/assets/mock/146576895.jpg" />
            <div class="ai__gallery__item__title">路况识别</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                路况识别
              </div>
              <div class="ai__gallery__item__intro__content">
                输入已获授权图片，从数据库的复数人脸中进行定向搜索的能力，最高支持百万级人脸数据库。适用人脸考勤、人脸打卡、人脸搜索、人脸通行等场景。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item">
            <img class="ai__gallery__item__img" src="~/assets/mock/134894386.jpg" />
            <div class="ai__gallery__item__title">矿区事故预警</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                矿区事故预警
              </div>
              <div class="ai__gallery__item__intro__content">
                输入已获授权图片，从数据库的复数人脸中进行定向搜索的能力，最高支持百万级人脸数据库。适用人脸考勤、人脸打卡、人脸搜索、人脸通行等场景。
              </div>
            </div>
          </div>
          <div class="ai__gallery__item">
            <img class="ai__gallery__item__img" src="~/assets/mock/303243143.jpg" />
            <div class="ai__gallery__item__title">智慧港口</div>
            <div class="ai__gallery__item__intro">
              <div class="ai__gallery__item__intro__title">
                智慧港口
              </div>
              <div class="ai__gallery__item__intro__content">
                输入已获授权图片，从数据库的复数人脸中进行定向搜索的能力，最高支持百万级人脸数据库。适用人脸考勤、人脸打卡、人脸搜索、人脸通行等场景。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .ai {
    &__container {
      @include container;
      padding: $containerPadding;
      display: flex;
    }
    &__title {
      font-size: 40px;
      width: 160px;
      margin-right: 110px;
    }
    &__right {
      flex: 1;
    }
    &__intro {
      font-size: 16px;
      line-height: $baseLineHeight;
      margin-bottom: 50px;
    }
    &__gallery {
      display: flex;
      flex-wrap: wrap;
      &__item {
        position: relative;
        flex: 1 300px;
        max-width: 360px;
        margin-right: 5px;
        margin-bottom: 5px;
        &__img {
          width: 100%;
          display: block;
        }
        &__title {
          position: absolute;
          z-index: 2;
          top: 25px;
          left: 0;
          padding: 5px 30px;
          background: rgba(0, 0, 0, 0.35);
          font-size: 16px;
          color: #fff;
        }
        &__intro {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          width: 100%;
          height: 100%;
          padding: 0 30px;
          color: #fff;
          background: rgba(0, 0, 0, 0.70);
          opacity: 0;
          transition: opacity 100ms;
          &__title {
            font-size: 16px;
            font-weight: bold;
            margin: 30px 0 15px 0;
          }
        }
        &::after {
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.20);
        }
        &:hover {
          .ai__gallery__item__intro {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
