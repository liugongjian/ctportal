<template>
  <Detail :intro-detail="introDetail" :feature="feature" :pic-name="picName"/>
</template>


<script lang="ts">
import { Vue, Component, Watch} from 'vue-property-decorator'
import  Detail from '../Detail.vue'

@Component
export default class extends Vue{
  private introDetail = ''
  private isEven = true
  private feature: any = []
  private picName: string = 'solution_list'

  @Watch('$route.query', { deep: true, immediate: true })
  public onRouterChange() {
    switch (this.$route.query.info) {
      case 'city':
        this.introDetail = '重点面向城市人流、车流信息，以及社会面视频数据的统一纳管，支持智能检测与分析'
        this.feature = ['大规模部署推流接入点，就近接入，保证各场合稳定推流',
                        '提供AI内容审核增值服务，可人脸识别，人员聚集检测、车辆牌号检索等',
                        '支持多种播流格式，支持全网加速分发',
                        '整合多渠道数据信息，智能统计与分析，丰富数据资产，助力城市管理数字化转型']
        this.picName = require('~/assets/images/solution/arch/city.svg')
        break
      case 'education':
        this.introDetail = '重点面向校园、培训机构等行业客户的视频监控需求，实现安全的内容分发和高价值内容录制留存'
        this.feature = ['建设周期短，成本低廉，适合技术能力薄弱的学校或者教育机构',
                        '支持设备接入、存储和分发一体化解决方案，按需扩容，提升资源利用率',
                        '支持AI算法仓库统一管理，GPU算力智能调度，AI算法统一编排']
        this.picName = require('~/assets/images/solution/arch/education.svg')
        break
      case 'community':
        this.introDetail = '重点面向校园、培训机构等行业客户的视频监控需求，实现安全的内容分发和高价值内容录制留存'
        this.feature = ['兼容主流视频终端设备，支持GB28181、GAT1400、RTMP、RTSP等协议直接接入，启动快、成本低',
                        '基于云原生架构部署、按需扩容，可支持百万级设备接入、存储和分发，提升资源利用率',
                        '提供向上级联能力，便于视频资源的共享，实现上级平台对社区视频资源的纳管']
        break
      case 'site':
        this.introDetail = '重点面向建筑行业客户，纳管所有工地视频，实现精准识别，提前告警等'
        this.feature = ['建设周期短，成本低廉，云端汇聚组网方式更加简单明了，可用性更强，后续运维简单可靠',
                        '大规模部署推流接入点，就近接入，满足多种形态视频资源的稳定接入',
                        '集成AI内容审核，进行人脸识别，人员聚集检测、车辆牌号检索等工地现场管控']
        this.picName = require('~/assets/images/solution/arch/site.svg')
        break
      case 'retail':
        this.introDetail = '重点面向零售行业客户，提供智能远程视频点检、远程看店，最终实现数字化精细化运营'
        this.feature = ['前端设备、平台公网/专线接入，设备统一接入与管理',
                        '根据业务特点，随时随地播放实时流、历史流，查看截图，支持监控内容的按需播放与调取，实现远程巡店',
                        '支持多种算法部署升级、算力弹性扩容，智能统计分析客流情况，智能预警']
        this.picName = require('~/assets/images/solution/arch/retail.svg')
        break
      case 'logistics':
        this.introDetail = '重点面向物流行业客户，支持智能检测与分析，实现货物轨迹动态跟踪'
        this.feature = ['智能分拣物件，规范从业人员行为规范管理',
                        '打破数据孤岛，将港口、车辆、仓库和快递柜等货物运输流程的视频云上集中管理',
                        '解决了企业物流运输任务的总体分配与调度，实时监控货物运输情况，形成物流数字化网络，提升对企业的综合服务能力']
        this.picName = require('~/assets/images/solution/arch/logistics.svg')
        break
    }
  }
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
    margin-bottom: 50px;
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
