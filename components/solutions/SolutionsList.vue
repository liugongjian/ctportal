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
  private list = [{id: 1, src: '/_nuxt/assets/images/ai/10005.png', title: '城市安全', content: '适用于对城市安全、应急管理、交通调度有迫切需求的城市'},
                  {id: 2, src: '/_nuxt/assets/images/ai/10009.png', title: '智能监管', content: '进行实时的智能监管，从而及时发现问题'},
                  {id: 3, src: '/_nuxt/assets/images/ai/10002.png', title: '协同调度', content: '可以快速协同调度资源，以解决问题'},
                  {id: 4, src: '/_nuxt/assets/images/ai/10013.png', title: '统一管理', content: '进行视频数据、结构化数据等多维度大数据的统一管理和应用'}]

  @Watch('$route.query', { deep: true, immediate: true })
  public onRouterChange() {
  }
}
</script>
