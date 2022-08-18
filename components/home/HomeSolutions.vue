<template>
  <div class="solution">
    <div class="solution__container">
      <div class="solution__title title">行业解决方案</div>
      <div class="solution__item__wrap">
        <el-tabs v-model="activeName">
          <el-tab-pane label="智慧城市" name="city" />
          <el-tab-pane label="智慧教育" name="education" />
          <el-tab-pane label="智慧社区" name="community" />
          <el-tab-pane label="智慧工地" name="site" />
          <el-tab-pane label="智慧零售" name="retail" />
          <el-tab-pane label="智慧物流" name="logistics" />
        </el-tabs>
        <div class="solution__item__wrap__desc">
          <div>
            <div class="solution__item__wrap__desc__content">
              <div class="solution__item__wrap__desc__content__title">
                {{ active.c_name }}
              </div>
              <div class="solution__item__wrap__desc__content__detail">
                {{ active.desc }}
              </div>
              <div style="margin-top:38px;margin-bottom:27px;font-size:16px;font-weight:bold;">应用场景:</div>
              <ul class="solution__item__wrap__desc__content__list">
                <li v-for="(item,index) in active.list" :key="index">{{item}}</li>
              </ul>
            </div>
            <div class="solution__item__wrap__desc__feature">
              <div v-for="(tag,index) in active.tags" :key="index" class="tag">
                <span>{{tag}}</span>
                <span class="seperator"/>
              </div>
            </div>
          </div>
          <div class="solution__item__wrap__desc__img">
            <img :src="active.image" />
            <div class="detail">查看详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component({
  name: 'HomeSolution'
})
export default class extends Vue{
  private activeName = 'city'
  private solutions = [
    { name:'city', c_name:'智慧城市', image: require('~/assets/images/solution/city.jpg'), tags:['视频接入', '录像存储', '车辆分析', '人流分析'], desc: '重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析。', list: ['大规模部署推流接入点，就近接入，保证各场合稳定推流', '提供AI内容审核增值服务，可人脸识别，人员聚集检测、车辆牌号检索等', '支持多种播流格式，支持全网加速分发', '整合多渠道数据信息，智能统计与分析，丰富数据资产，助力城市管理数字化转型'] },
    { name:'education', c_name:'智慧教育', image: require('~/assets/images/solution/education.jpg'), tags:[ '视频接入', '录像存储', '人脸分析', '车辆分析'],  desc: '重点面向校园、培训机构等行业客户的视频监控需求，实现安全的内容分发和高价值内容录制留存。', list: ['建设周期短，成本低廉，适合技术能力薄弱的学校或者教育机构', '支持设备接入、存储和分发一体化解决方案，按需扩容，提升资源利用率', '支持AI算法仓库统一管理，GPU算力智能调度，AI算法统一编排'] },
    { name:'community', c_name:'智慧社区', image: require('~/assets/images/solution/community.jpg'), tags:['视频接入', '录像存储', '人流分析'],  desc: '重点面向涉及社区客户在线监控服务：如楼宇、小区、园区等，支持大并发就近上云。', list: ['兼容主流视频终端设备，支持GB28181、GAT1400、RTMP、RTSP等协议直接接入，启动快、成本低', '基于云原生架构部署、按需扩容，可支持百万级设备接入、存储和分发，提升资源利用率', '提供向上级联能力，便于视频资源的共享，实现上级平台对社区视频资源的纳管'] },
    { name:'site', c_name:'智慧工地', image: require('~/assets/images/solution/site.jpg'), tags:['视频接入', '录像存储', '危险区域告警', '安全帽反光服识别'],  desc:'重点面向建筑行业客户，纳管所有工地视频，实现精准识别，提前告警等。' , list: ['建设周期短，成本低廉，云端汇聚组网方式更简单明了，可用性更强，后续运维简单可靠','大规模部署推流接入点，就近接入，满足多种形态视频资源的稳定接入', '集成AI内容审核，进行人脸识别，人员聚集检测、车辆牌号检索等工地现场管控'] },
    { name:'retail', c_name:'智慧零售', image: require('~/assets/images/solution/retail.jpg'), tags:['视频接入', '车辆分析', '人流分析'],  desc: '重点面向零售行业客户，提供智能远程视频点检、远程看店，最终实现数字化精细化运营。', list: ['前端设备、平台公网/专线接入，设备统一接入与管理','根据业务特点，随时随地播放实时流、历史流，查看截图，支持监控内容的按需播放与调取，实现远程巡店', '支持多种算法部署升级、算力弹性扩容，智能统计分析客流情况，智能预警'] },
    { name:'logistics', c_name:'智慧物流', image: require('~/assets/images/solution/logistics.jpg'), tags:['视频接入', '录像存储', '车辆分析'],  desc: '重点面向物流行业客户，支持智能检测与分析，实现货物轨迹动态跟踪。', list: ['智能分拣物件，规范从业人员行为规范管理','打破数据孤岛，将港口、车辆、仓库和快递柜等货物运输流程的视频云上集中管理','解决了企业物流运输任务的总体分配与调度，实时监控货物运输情况，形成物流数字化网络，提升对企业的综合服务能力'] }
  ]
  get active() {
    return this.solutions.find(item => item.name === this.activeName)
  }
}
</script>
<style lang="scss" scoped>
  .solution {

    background: #F8F9FB url('../../assets/mock/solution/home_background.png') no-repeat;
    background-size:100%;
    &__container {
      @include container;
      @include containerPadding;
    }
    &__title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 50px;
      color: #fff;
    }
    &__item__wrap {
      display: flex;
      flex-direction: column;
      ::v-deep .el-tabs__nav-wrap::after{
        display: none;
      }
      ::v-deep .el-tabs__active-bar{
        background-color: #fff;
        height: 4px;
      }
      ::v-deep .el-tabs__item{
        color: rgba(255,255,255,0.80);
        font-size: 16px;
      }
      &__desc {
        height: 500px;
        margin-top: 61px;
        background: #FFFFFF;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.1);
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        &__feature{
          margin: 28px 0 0 32px;
          display: flex;
          align-items: center;
          .tag{
            color: #828282;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .seperator{
              display: inline-block;
              width: 1px;
              height: 33px;
              background: #828282;
              margin: 0 47px;
            }
          }
          .tag:last-child .seperator{
            display: none;
          }
        }
        &__content{
          width: 728px;
          height: 375px;
          margin-left: 32px;
          margin-top: 13px;
          border-radius: 4px;
          background-image: linear-gradient(173deg, #F5F5F7 0%, rgba(241,241,241,0.00) 100%);
          background: url('../../assets/mock/solution_bg.png') no-repeat;
          &__title{
            font-size: 22px;
            font-weight: 500;
            margin: 25px 0 30px 0;
          }
          &__tag{
            .el-tag{
              margin-right: 2%;
            }
          }
          &__detail{
            margin-top: 16px;
            font-size: 14px;
            color: #828282;
            font-weight: 500;
          }
          &__list {
            margin: 10px 0 0;
            padding-left: 20px;
            li {
              margin-bottom: 20px;
              padding-left: 11px;
              list-style-image:url('../../assets/mock/solution/tick.png');
            }
          }
        }
        img {
          width: 406px;
          height: 385px;
          margin-top: 30px;
          margin-right: 32px;
          border-radius: 4px;
        }
        .detail{
          font-size: 14px;
          color: #DF0629;
          margin-top: 28px;
        }
      }
      .el-tabs{
        align-self: center;
        ::v-deep .el-tabs__item{
          font-size: 20px !important;
          padding: 0 65px;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }
</style>
