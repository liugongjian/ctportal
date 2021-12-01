<template>
  <div class="map-wrapper">
    <div class="map-wrapper__title">天翼云全国云资源布局</div>
    <div class="map-wrapper__desc">天翼云视频监控节点分布在全国15省，27个地理区域，提供高速稳定、贴近客户的视频云网服务</div>
    <div id="home-amap"></div>
    <div class="map-wrapper__region">
      <ul @mouseleave="getRegionDetail('')">
        <li @mouseover="getRegionDetail('huadong')">华东</li>
        <li @mouseover="getRegionDetail('huabei')">华北</li>
        <li @mouseover="getRegionDetail('huanan')">华南</li>
        <li @mouseover="getRegionDetail('dongbei')">东北</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
declare let echarts: any
import { Vue, Component} from 'vue-property-decorator'
import { city } from '@/assets/ts/city'

let regions: any = {
  'huadong':['上海市', '盐城市', '济宁市', '舟山市'],
  'huabei':['齐齐哈尔市', '济南市', '赤峰市'],
  'huanan':['广州市', '福州市', '泉州市', '厦门市'],
  'dongbei':['吉林市', '哈尔滨市', '长春市', '大连市'],
}

let city_info: any = [
    {name: '上海市', value: 20},
    {name: '盐城市', value: 30},
    {name: '济宁市', value: 50},
    {name: '舟山市', value: 100},
    {name: '齐齐哈尔市', value: 100},
    {name: '济南市', value: 100},
    {name: '赤峰市', value: 80},
    {name: '广州市', value: 100},
    {name: '福州市', value: 20},
    {name: '泉州市', value: 100},
    {name: '厦门市', value: 53},
    {name: '吉林市', value: 100},
    {name: '哈尔滨市', value: 25},
    {name: '长春市', value: 100},
    {name: '大连市', value: 75}
]

@Component
export default class extends Vue{

  public chart:any
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
  }


  public generateOption(data :any, type :string, onHover :boolean){
    const format = onHover ? '{b}:\n节点数：{@[2]}' : '{b}'
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
                  areaColor: 'rgba(23,23,23)',
                  borderColor: '#fff'
                },
                emphasis: { // 高亮状态下的样式
                  areaColor: 'rgba(23,23,23)'
                }
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: function(params:any) {
                var html = params.name + '<br/>';
                html += params.seriesName + ":";
                html += params.value[2]
                return html;
              }
            },
            //配置属性
            series: [{
              name: '节点数',
              type: type,
              coordinateSystem: 'geo', // series坐标系类型
              itemStyle: {
                normal: {
                  color: '#00c1de',
                  label: {
                    show: onHover,
                    formatter: format,
                    position: 'right',
                    textStyle: {
                      color: "#fff"
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

  public getRegionDetail(region:any){
    if(region !== ''){
      const city_data = city_info.filter((info:any) => regions[region].indexOf(info.name) > 0)
      const map_data = city_data.map((data:any) =>{
        const temp = city.filter((item:any) => data.name === item.name)
        if(temp.length > 0){
          return {
            name: data.name,
            value: [temp[0].lng, temp[0].lat, data.value]
          }
        }
      })
      const option = this.generateOption(map_data, 'effectScatter', true)
      this.chart.setOption(option);
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
    }
  }
}
</script>
<style lang="scss">
.map-wrapper{
  background: rgba(33,33,38);
  height: 1000px;
  position: relative;
  #home-amap {
      width: 100%;
      height: 100%;
  }
  &__title{
    position: absolute;
    z-index: 999;
    font-size: 40px;
    top: 3%;
    left: 50%;
    transform: translate(-50%);
    color: #fff;
  }
  &__desc{
    position: absolute;
    z-index: 999;
    top: 8%;
    left: 50%;
    transform: translate(-50%);
    color: #fff;
  }
  &__region{
    position: absolute;
    top:30%;
    right: 5%;
    width: 20%;
    &>ul{
      color: rgba(255, 255, 255, 0.527);
      list-style: none;
    }
    & li{
      text-align: center;
      line-height: 50px;
      font-size: 22px;
      font-weight: bold;
      border:2px solid rgba(255, 255, 255, 0.527);
      height: 50px;
      cursor: pointer;
    }
    & li:hover{
      border: 2px solid rgba(0,193,222, 0.527);
      background: rgba(0,193,222, 0.527);
      color: #fff;
    }
  }
}
</style>
