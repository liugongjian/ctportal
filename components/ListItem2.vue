<template>
  <div class="list__item2" :class="{'small': isSmall}">
    <div class="list__item2__img"><img :src="item.src" /></div>
    <div class="list__item2__word">
      <div class="list__item2__title">{{item.title}}</div>
      <div class="list__item2__content">{{item.content}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component} from 'vue-property-decorator'


@Component
export default class extends Vue{
  @Prop() private item!: any
  @Prop() private isSmall!: boolean
}
</script>

<style lang="scss" scoped>
.list__item2{
  width: 450px;
  margin-bottom: 80px;
  display: flex;
  &__img{
    img{
      width:48px;
      height: 48px;
    }
  }
  &__word{
    margin-left: 40px;
  }
  &__title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  &__content{
    font-size: 14px;
    line-height: 20px;
  }
}
.small{
  width: 340px;
}
</style>
