<template>
  <div>
    <!-- 人脸识别 -->
    <div class="list">
      <div class="list__container">
        <div class="list__title">人脸识别</div>
        <div class="list__item__wrap">
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/10001.png" /></div>
            <div class="list__item__title">人脸比对1:1</div>
            <div class="list__item__content">通过比对人脸库中的照片，进行1:N比对，得到人脸相似度并返回被识别的人员信息。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/face_01.png" /></div>
            <div class="list__item__title">人脸搜索1:N</div>
            <div class="list__item__content">将一张人脸图片在人脸库的中进行搜索，返回最相似的一张或多张人脸及对应相似度。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/10003.png" /></div>
            <div class="list__item__title">人脸口罩检测</div>
            <div class="list__item__content">通过人脸和人体分析的方式检测用户是否佩戴口罩。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/face_04.png" /></div>
            <div class="list__item__title">人脸属性识别</div>
            <div class="list__item__content">识别各个检测人脸的性别、年龄、表情等属性。</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 人体识别 -->
    <div class="list even">
      <div class="list__container">
        <div class="list__title">人体识别</div>
        <div class="list__item__wrap">
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/10005.png" /></div>
            <div class="list__item__title">人员聚集</div>
            <div class="list__item__content">适用于3米以上的中远距离俯拍，以头部为识别目标统计图片中的瞬时人数。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/body_01.png" /></div>
            <div class="list__item__title">人体属性检测</div>
            <div class="list__item__content">检测图像中的所有人体，识别20余类属性信息，包含性别年龄、服饰类别、服饰颜色等。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/10002.png" /></div>
            <div class="list__item__title">动作行为识别</div>
            <div class="list__item__content">检测画面中的人员是否有吸烟、打电话、玩手机、趴桌睡觉、跌倒等动作。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/10006.png" /></div>
            <div class="list__item__title">危险区域检测</div>
            <div class="list__item__content">对危险监控区域内的人员靠近行为进行识别。</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 物体识别 -->
    <div class="list">
      <div class="list__container">
        <div class="list__title">物体识别</div>
        <div class="list__item__wrap">
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/object_01.png" /></div>
            <div class="list__item__title">通用物体识别</div>
            <div class="list__item__content">识别商品、建筑、风景、食材等常见物体及场景。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/10007.png" /></div>
            <div class="list__item__title">烟雾明火检测</div>
            <div class="list__item__content">对画面中的烟雾、明火进行识别，适用于楼宇、工厂、加油站等场景。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/object_02.png" /></div>
            <div class="list__item__title">动物识别</div>
            <div class="list__item__content">识别各种动物。</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 物体识别 -->
    <div class="list even">
      <div class="list__container">
        <div class="list__title">车辆识别</div>
        <div class="list__item__wrap">
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/10014.png" /></div>
            <div class="list__item__title">车牌识别</div>
            <div class="list__item__content">自动识别车辆车牌信息，应用于停车场、小区、工厂等场景，实现无卡、无人的车辆进出场自动化、规范化管理。</div>
          </div>
          <div class="list__item">
            <div class="list__item__img"><img src="~/assets/images/ai/car_03.png" /></div>
            <div class="list__item__title">车辆属性识别</div>
            <div class="list__item__content">识别车量颜色、品牌、款式，及驾驶员违规行为识别检测。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .list {
    &.even {
      background: #f1f1f1;
    }
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
      justify-content: space-around;
    }
    &__item {
      width: 250px;
      margin: 0 35px;
      &__img {
        height: 250px;
        width: 250px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          height: 80%;
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
