<template>
  <div class="list__item">
    <div class="list__item__word">
      <div class="list__item__title">{{item.title}}</div>
      <div class="list__item__seperator"/>
      <div class="list__item__content">{{item.content}}</div>
    </div>
    <div class="list__item__img"><img :src="item.src" /></div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component} from 'vue-property-decorator'


@Component
export default class extends Vue{
  @Prop() private item!: any
}
</script>

<style lang="scss" scoped>
.list__item {
  margin: 12px 12px;
  font-family: PingFangSC-Medium;
  color: #181818;
  line-height: 20px;
  font-weight: 500;
  background: #FFFFFF;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.1);
  &__word{
    padding-right: 20px;
  }
  &__seperator{
    width: 52px;
    height: 3px;
    background: #DF0629;
    margin: 0 0 20px 27px;

  }
  &__img {
    img {
      height: 220px;
      width: 254px;
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
    margin-left: 27px;
  }
}
</style>
