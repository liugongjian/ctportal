<template>
  <List :title="title" :list="list" :isEven="isEven"/>
</template>

<script lang="ts">
import { Vue, Component, Watch} from 'vue-property-decorator'
import  List from '../List.vue'

@Component
export default class extends Vue{
  private title = '应用场景'
  private isEven = true
  private list: any = []

  @Watch('$route.query', { deep: true, immediate: true })
  public onRouterChange() {
    switch (this.$route.query.info) {
      case 'city':
        this.isEven = false
        this.list = [{id: 1, src: require('~/assets/mock/solution/city5.png'), title: '城市安全', content: '适用于对城市安全、应急管理、交通调度有迫切需求的城市'},
                  {id: 2, src: require('~/assets/mock/solution/city6.png'), title: '智能监管', content: '进行实时的智能监管，从而及时发现问题'},
                  {id: 3, src: require('~/assets/mock/solution/city7.png'), title: '协同调度', content: '可以快速协同调度资源，以解决问题'},
                  {id: 4, src: require('~/assets/mock/solution/city8.png'), title: '统一管理', content: '进行视频数据、结构化数据等多维度大数据的统一管理和应用'}]
        break
      case 'education':
        this.isEven = true
        this.list = [{id: 1, src: require('~/assets/mock/solution/edu1.png'), title: '智能管理', content: '适用于校园内实时视频、安全隐患识别、人员管理分析等一站式智能管理服务，实现平安校园的宗旨'},
                  {id: 2, src: require('~/assets/mock/solution/edu2.png'),  title: '安全监管', content: '教育监管机构、学生家长等利益关切方通过 APP和PC客户端实时观看视频'}]
        break
      case 'community':
        this.isEven = true
        this.list = [{id: 1, src: require('~/assets/mock/solution/community1.png'),  title: '易于接入', content: '通过视频监控服务接入不同社区设备，统一上云汇聚，减少上级监管部门级联组网复杂，机房过多维护困难等问题，减少运维成本'},
                  {id: 2, src: require('~/assets/mock/solution/community2.png'),  title: '安全监管', content: '适用于安全防范管理存在漏洞，群防群治薄弱的社区建设，有利于上级主管部门的调阅监控'}]
        break
      case 'site':
        this.isEven = true
        this.list = [{id: 1, src: require('~/assets/mock/solution/construct1.png'), title: '智能管理', content: '适用于管理系统与安防系统不配套，信息化程度较低，员工管控便利性不足，无法投入大量人力保障工地现场的场景'},
                  {id: 2, src: require('~/assets/mock/solution/construct2.png'), title: '安全预防', content: '纳管所有工地视频，AI算法高效识别现场情况，预防事故的发生，有效降低事故率，助力实现“云监工”'}]
        break
      case 'retail':
        this.isEven = true
        this.list = [{id: 1, src: require('~/assets/mock/solution/retail1.png'), title: '市场预判', content: '适用于门店分散、加盟店多、人员管理难；客流客群数据统计难，难以判断市场动向；难以判断营销活动效果的门店智慧化改造'},
                  {id: 2, src: require('~/assets/mock/solution/retail2.png'), title: '智慧数据', content: '通过视频信息的数据化采集与应用为业务运营降本增效，积累行业智慧数据，快速支撑连锁门店的运营决策，提高企业收益率'}]
        break
      case 'logistics':
        this.isEven = true
        this.list = [{id: 1, src: require('~/assets/mock/solution/express1.png'), title: '智能管理', content: '适用于智能化程度较低的物流公司或者站点，可以更方便的检测到货物的运输轨迹，以及运输流程节点中的车辆管理、人员管理、仓库管理等'},
                  {id: 2, src: require('~/assets/mock/solution/express2.png'), title: '轨迹跟踪', content: '将港口、车辆、仓库和快递柜等货物运输流程的视频云上集中管理，实现货物轨迹动态跟踪'}]
        break
    }
  }
}
</script>
