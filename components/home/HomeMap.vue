<template>
  <div class="map-wrapper">
    <div class="map-wrapper__title">天翼云全国云资源布局</div>
    <div class="map-wrapper__desc">天翼云视频监控节点分布在全国15省，27个地理区域，提供高速稳定、贴近客户的视频云网服务</div>
    <div id="home-amap"></div>
    <div class="map-wrapper__region">
      <div v-if="provinceShow" class="map-wrapper__region__detail">
        <div v-for="(item,index) in provinceInfo" :key="index" class="map-wrapper__region__detail__province">
          <div>{{item.province}}</div>
          <div v-for="(c,i) in item.city" :key="i" class="map-wrapper__region__detail__city">- {{c}}</div>
        </div>
      </div>
      <ul @mouseleave="toFixRegion()">
        <li @mouseover="getRegionDetail('')" @click="fixRegion('')" :class="{'clicked':theRegion === ''}">全国({{country}})</li>
        <li @mouseover="getRegionDetail('huadong')" @click="fixRegion('huadong')" :class="{'clicked':theRegion === 'huadong'}">华东({{regions['huadong'].length}})</li>
        <li @mouseover="getRegionDetail('xinan')" @click="fixRegion('xinan')" :class="{'clicked':theRegion === 'xinan'}">西南({{regions['xinan'].length}})</li>
        <li @mouseover="getRegionDetail('beifang')" @click="fixRegion('beifang')" :class="{'clicked':theRegion === 'beifang'}">北方({{regions['beifang'].length}})</li>
        <li @mouseover="getRegionDetail('huanan')" @click="fixRegion('huanan')" :class="{'clicked':theRegion === 'huanan'}">华南({{regions['huanan'].length}})</li>
        <li @mouseover="getRegionDetail('xibei')" @click="fixRegion('xibei')" :class="{'clicked':theRegion === 'xibei'}">西北({{regions['xibei'].length}})</li>
        <li @mouseover="getRegionDetail('guizhou')" @click="fixRegion('guizhou')" :class="{'clicked':theRegion === 'guizhou'}">贵州云基地({{regions['guizhou'].length}})</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
declare let echarts: any
import { Vue, Component} from 'vue-property-decorator'
import { city, regions, city_info, province} from '@/assets/ts/city'
import { deounbce } from '@/assets/ts/debounce'

@Component
export default class extends Vue{

  public chart:any
  public theRegion: any = 'nowhere'
  public provinceShow = false

  public regions:any = regions
  public provinceInfo:any = []

  get country(){
    return Object.keys(this.regions).reduce((pre,item) => pre + regions[item].length, 0)
  }
  public mounted(){

        const map_data = city_info.map((info:any) =>{
          const temp = city.filter((item:any) => info.name === item.name)
          if(temp.length > 0){
            return {
              name: info.name,
              value: [temp[0].lng, temp[0].lat, info.value]
            }
          }
        })
        // ECharts Option配置
        let option = this.generateOption(map_data, 'scatter', false)
        // 初始化ECharts
        this.chart = echarts.init(document.getElementById('home-amap'));
        this.chart.setOption(option);
        //处理resize
        const debounce_resize = deounbce(() => this.chart.resize(), 200)
        window.onresize = debounce_resize
  }


  public generateOption(data :any, type :string, onHover :boolean){
    // const format = onHover ? '{b}:\n节点数：{@[2]}' : '{b}'
    const format = '{b}'
    return {
            geo: {
              map: 'china',
              roam: false,
              label: { // 定义样式
                normal: { // 普通状态下的样式
                  show:false
                },
                emphasis: { // 高亮状态下的样式
                  show:false
                }
              },
              itemStyle: { // 定义样式
                normal: { // 普通状态下的样式
                  areaColor: 'rgba(164,164,164)',
                  borderColor: '#fff'
                },
                emphasis: { // 高亮状态下的样式
                  areaColor: 'rgba(164,164,164)'
                }
              }
            },
            // tooltip: {
            //   trigger: 'item',
            //   formatter: function(params:any) {
            //     var html = params.name
            //     // var html = params.name + '<br/>';
            //     // html += params.seriesName + ":";
            //     // html += params.value[2]
            //     return html;
            //   }
            // },
            //配置属性
            series: [{
              name: '节点数',
              type: type,
              coordinateSystem: 'geo', // series坐标系类型
              itemStyle: {
                normal: {
                  color: '#fa8334',
                  label: {
                    show: onHover,
                    formatter: format,
                    position: 'right',
                    textStyle: {
                      color: "#000"
                    }
                  }
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              data: data
            }]

          }
  }

  public fixRegion(region:any){
    this.theRegion = region
  }
  public toFixRegion(){
    if(this.theRegion === 'nowhere'){
      this.provinceShow = false
    } else {
      this.provinceShow = true
      this.getRegionDetail(this.theRegion)
    }
  }
  public getRegionDetail(region:any){
    if(region !== ''){
      const city_data = city_info.filter((info:any) => regions[region]?.indexOf(info.name) > -1)
      const map_data = city_data.map((data:any) =>{
        const temp = city.filter((item:any) => data.name === item.name)
        if(temp.length > 0){
          return {
            name: data.name,
            value: [temp[0].lng, temp[0].lat, data.value]
          }
        }
      })
      const option = this.generateOption(map_data, 'scatter', false)
      this.chart.setOption(option);
      this.provinceShow = true
      this.provinceInfo = province[region]
    } else {
        const map_data = city_info.map((info:any) =>{
        const temp = city.filter((item:any) => info.name === item.name)
          if(temp.length > 0){
            return {
              name: info.name,
              value: [temp[0].lng, temp[0].lat, info.value]
            }
          }
        })
        const option = this.generateOption(map_data, 'scatter', false)
        this.chart.setOption(option);
        this.provinceShow = false
    }
  }
}
</script>
<style lang="scss">
.map-wrapper{
  background: #f1f1f1;
  height: 1000px;
  position: relative;
  #home-amap {
      width: 80%;
      height: 100%;
  }
  &__title{
    position: absolute;
    z-index: 999;
    font-size: 40px;
    top: 3%;
    left: 50%;
    transform: translate(-50%);
    color: rgba(51,51,51);
  }
  &__desc{
    position: absolute;
    z-index: 999;
    top: 9%;
    left: 50%;
    transform: translate(-50%);
    color: rgba(51,51,51);
  }
  &__region{
    position: absolute;
    top:30%;
    right: 5%;
    width: 25%;
    .clicked{
      color: $primary;
    }
    &__detail{
      border: 2px solid rgba(164,164,164);
      width: 50%;
      display: inline-block;
      box-sizing: border-box;
      &__province > div:nth-child(1){
        font: 20px bold;
        margin: 5px 0 10px 5px;
      }
      &__city {
        margin: 5px 10px;
      }
    }
    &>ul{
      width: 49%;
      float: right;
      color: rgba(51,51,51);
      list-style: none;
      padding: 0;
      display: inline-block;
      box-sizing: border-box;
    }
    & li{
      text-align: center;
      line-height: 50px;
      font-size: 22px;
      font-weight: bold;
      border:2px solid rgba(164,164,164);
      border-bottom: none;
      height: 50px;
      cursor: pointer;
    }
    & li:last-child{
      border-bottom: 2px solid rgba(164,164,164);
    }
    & li:hover{
      border: 2px solid $primary;
      background: $primary;
      color: #fff;
    }
  }
}
</style>
