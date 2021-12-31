import mapjson from '../json/chinamap.json'

export function registerChinaMap(echarts:any) {
  var log = function (msg:any) {
      if (typeof console !== 'undefined') {
          console && console.error && console.error(msg);
      }
  }
  if (!echarts) {
      log('ECharts is not Loaded');
      return;
  }
  if (!echarts.registerMap) {
      log('ECharts Map is not loaded')
      return;
  }
  echarts.registerMap('china', mapjson);
};
