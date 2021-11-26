<template>
  <div class="architect__wrapper">
    <div class="architect__title">方案架构</div>
    <div class="architect__content">
      <div class="architect__content__pic"><img src="~/assets/mock/solution_list.png" alt="" /></div>
      <div class="architect__content__desc">
        <div class="architect__content__desc__title">方案介绍</div>
        <div class="architect__content__desc__detail">重点面向物流行业客户，支持智能检测与分析，实现货物轨迹动态跟踪</div>
        <div class="architect__content__desc__title">架构特点</div>
        <div class="architect__content__desc__detail">
          - 智能分拣物件，规范从业人员行为规范管理<br>
          - 打破数据孤岛，将港口、车辆、仓库和快递柜等货物运输流程的视频云上集中管理<br>
          - 解决了企业物流运输任务的总体分配与调度，实时监控货物运输情况，形成物流数字化网络，提升对企业的综合服务能力</div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'


@Component
export default class extends Vue{
}
</script>


<style lang="scss" scoped>
.architect__wrapper{
    max-width: 1360px;
    min-width: 1100px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    color: #333333;
    padding-top: 70px;
    padding-bottom: 70px;
  .architect__title{
    font-size: 40px;
    text-align: center;
    margin-bottom: 80px;
  }
  .architect__content{
    display: flex;
    &__pic{
      flex: 6;
      &>img{
        max-width: 800px;
        min-width: 500px;
      }
    }
    &__desc{
      flex: 3;
      &__title{
        font-size: 24px;
        font-weight: bold;
        margin: 30px 0 20px 0;
      }
      &__detail{
        line-height: 30px;
      }
    }
  }
}
</style>
