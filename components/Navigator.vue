<template>
  <div ref="banner" class="navigation__wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick" ref="tabs">
      <el-tab-pane v-for="nav in navigation" :label="nav.label" :name="nav.name" :key="nav.name"/>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch} from 'vue-property-decorator'
import { deounbce } from '~/assets/ts/debounce'


@Component
export default class extends Vue{
  @Prop() private navigation!: any
  private activeName = ''
  private bann: any
  private bannerTop = 500
  private bodyHeight = 0
  private stopWatchFlag = false

  // private debounceHandle = deounbce(() => this.followScroll(),100)

  @Watch('bodyHeight')
  public onBodyHeightScroll() {
    if(!this.stopWatchFlag){
      this.followScroll()
    }
  }

  private followScroll(){
    if(this.navigation){
      for(let i = 0 ; i < this.navigation.length ; i++){
        this.resetActivePosition()
        if(this.bodyHeight < this.navigation[i].el.offsetTop){
          const scrollHeight =   document.documentElement.scrollHeight || document.body.scrollHeight
          const clientHeight =  document.documentElement.clientHeight || document.body.clientHeight
          if(Math.floor(this.bodyHeight) === scrollHeight - clientHeight){
            this.activeName = this.navigation[this.navigation.length - 1].name
          } else {
            this.activeName = this.navigation[i].name
          }
          break
        }
      }
    }
  }

  private mounted() {
    this.activeName = this.navigation[0].name
    this.resetActivePosition()
    window.addEventListener("scroll", this.handScroll)
    this.bann = this.$refs.banner
    this.bannerTop = this.bann?.offsetTop
  }

  private handScroll() {
      let scrolltop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (scrolltop >= this.bannerTop) {
        this.bann.classList.add("isTop");
        //如果滑动到导航就绑定样式让它吸顶
      } else {
        this.bann.classList.remove("isTop");
      }
      this.bodyHeight = scrolltop
  }



  private handleClick(){
    this.stopWatchFlag = true
    this.resetActivePosition()
    this.jumpTo(this.activeName)
    setTimeout(() => {
      this.stopWatchFlag = false
    },1000)
  }

  private resetActivePosition() {
    const tabEl: any = this.$refs.tabs
    const $el:any = tabEl.$el
      this.$nextTick(() => {
        const activeEl = $el.querySelector('.el-tabs__item.is-active');
        const lineEl = $el.querySelector('.el-tabs__active-bar');
        if(activeEl && lineEl){
          const style: any = getComputedStyle(activeEl);
          const pl = style.paddingLeft.match(/\d+/)[0] * 1;
          const pr = style.paddingRight.match(/\d+/)[0] * 1;
          const w = style.width.match(/\d+/)[0] * 1;
          lineEl.style.transform = 'translateX(' + (activeEl.offsetLeft + pl) + 'px)';
          lineEl.style.width = (w - pl - pr)+'px';
        }
      })
  }

  private jumpTo(elName :any){
    const activeNav = this.navigation.filter( (nav:any) => nav.name === elName)[0]
    activeNav.el.scrollIntoView({behavior: "smooth"})
  }
}
</script>


<style lang="scss" scoped>
.isTop {
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
}
.navigation__wrapper{
  font-size: 22px;
  font-weight: 500;
  ::v-deep .el-tabs__header{
    margin: 0 !important;
  }
  ::v-deep .el-tabs__nav-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px 0px rgba(235,233,233,0.5);
    .el-tabs__nav-scroll{
      width: 100%;
      display: flex;
      justify-content: center;
      .el-tabs__nav{
        height: 96px;
        max-width: 1360px;
        min-width: 1100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        .el-tabs__active-bar{
          background: #DF0629;
          height: 4px;
        }
        .el-tabs__item{
          margin-top: 32px;
        }
        .el-tabs__item:hover{
          color: #DF0629;
        }
      }
    }
  }
  ::v-deep .el-tabs__nav-wrap::after{
    height: 0;
  }
  ::v-deep .is-active {
    color:#DF0629;
  }
}
</style>
