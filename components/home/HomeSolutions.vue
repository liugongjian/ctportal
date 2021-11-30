<template>
  <div class="advantage">
    <div class="advantage__container">
      <div class="advantage__title">行业解决方案</div>
      <div class="advantage__item__wrap">
        <el-tabs v-model="activeName">
          <el-tab-pane label="智慧城市" name="city" />
          <el-tab-pane label="智慧教育" name="education" />
          <el-tab-pane label="智慧社区" name="community" />
          <el-tab-pane label="智慧工地" name="cite" />
          <el-tab-pane label="智慧零售" name="retail" />
          <el-tab-pane label="智慧物流" name="logistics" />
        </el-tabs>
        <div class="advantage__item__wrap__desc">
          <img src="~/assets/mock/home_slider.png" />
          <div class="advantage__item__wrap__desc__content">
            <div class="advantage__item__wrap__desc__content__title">
              {{active.c_name}}
            </div>
            <div class="advantage__item__wrap__desc__content__tag">
              <el-tag type="warning" v-for="(tag,index) in active.tags" :key="index">{{tag}}</el-tag>
            </div>
            <div class="advantage__item__wrap__desc__content__detail">
              <div v-for="(item,index) in active.desc" :key="index">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  private activeName = 'city'
  private solutions = [{name:'city', c_name:'智慧城市',tags:['视频接入', '录像存储', '车辆分析', '人流分析'], desc:['重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析。','- 适用于对城市安全、应急管理、交通调度有迫切需求的城市。','- 进行实时的智能监管，从而及时发现问题。','- 可以快速协同调度资源，以解决问题。','- 进行视频数据、结构化数据等多维度大数据的统一管理和应用。']},
                        {name:'education', c_name:'智慧教育',tags:[ '录像存储', '车辆分析', '人流分析'],  desc:['重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析。','- 适用于对城市安全、应急管理、交通调度有迫切需求的城市。','- 进行实时的智能监管，从而及时发现问题。','- 可以快速协同调度资源，以解决问题。','- 进行视频数据、结构化数据等多维度大数据的统一管理和应用。']},
                        {name:'community', c_name:'智慧社区',tags:['视频接入', '录像存储', '人流分析'],  desc:['重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析。','- 适用于对城市安全、应急管理、交通调度有迫切需求的城市。','- 进行实时的智能监管，从而及时发现问题。','- 可以快速协同调度资源，以解决问题。','- 进行视频数据、结构化数据等多维度大数据的统一管理和应用。']},
                        {name:'cite', c_name:'智慧工地',tags:['视频接入', '录像存储', '车辆分析', '人流分析'],  desc:['重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析。','- 适用于对城市安全、应急管理、交通调度有迫切需求的城市。','- 进行实时的智能监管，从而及时发现问题。','- 可以快速协同调度资源，以解决问题。','- 进行视频数据、结构化数据等多维度大数据的统一管理和应用。']},
                        {name:'retail', c_name:'智慧零售',tags:['视频接入', '车辆分析', '人流分析'],  desc:['重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析。','- 适用于对城市安全、应急管理、交通调度有迫切需求的城市。','- 进行实时的智能监管，从而及时发现问题。','- 可以快速协同调度资源，以解决问题。','- 进行视频数据、结构化数据等多维度大数据的统一管理和应用。']},
                        {name:'logistics', c_name:'智慧物流',tags:['视频接入', '录像存储', '车辆分析'],  desc:['重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析。','- 适用于对城市安全、应急管理、交通调度有迫切需求的城市。','- 进行实时的智能监管，从而及时发现问题。','- 可以快速协同调度资源，以解决问题。','- 进行视频数据、结构化数据等多维度大数据的统一管理和应用。']}]
  get active() {
    let actv = this.solutions.filter(item => item.name === this.activeName)
    if(actv.length > 0){
      return actv[0]
    }
  }
}
</script>
<style lang="scss" scoped>
  .advantage {
    background: #fff;
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
      flex-direction: column;
      &__desc {
        height: 450px;
        display: flex;
        justify-content: space-around;
        &__content{
          &__title{
            font-size: 30px;
            margin: 40px 0;
          }
          &__tag{
            .el-tag{
              margin-right: 2%;
            }
          }
          &__detail{
            margin-top: 40px;
            & > div:nth-child(1){
              margin-bottom: 20px;
            }
          }
        }
        & > img {
          height: 100%;
        }
      }
      .el-tabs{
        align-self: center;
        ::v-deep .el-tabs__item{
          font-size: 20px !important;
        }
      }
    }
  }
</style>
