<template>
  <div class="list__item" @click="handleClick">
    <div class="list__item__img"><img :src="item.src" /></div>
    <div class="list__item__title">{{item.title}}</div>
    <div class="list__item__content">{{item.content}}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component} from 'vue-property-decorator'


@Component
export default class extends Vue{
  @Prop() private item!: any

  private handleClick(){
    const routeData = this.$router.resolve({ path: '/aidemo', query: { info: this.item.url} });
    window.open(routeData.href, '_blank');
  }
}
</script>

<style lang="scss" scoped>
.list__item {
  // width: 383px;
  // height: 319px;
  margin: 12px 12px;
  font-family: PingFangSC-Medium;
  color: #181818;
  line-height: 20px;
  font-weight: 500;
  background: #FFFFFF;
  border-radius: 4px;
  &__img {
    height: 183px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    font-size: 18px;
    font-weight: bold;
    margin: 22px 0 20px 27px;
  }
  &__content {
    font-size: 12px;
    text-align: justify;
    margin: 0 20px 38px 27px;
  }
}
</style>
