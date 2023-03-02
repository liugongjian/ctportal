<template>
  <div class="app-article">
    <h1>第三方数据共享</h1>
    <p>
      为保障天翼云瞰APP相关功能实现与应用的稳定运行，我们可能会接入由第三方软件开发包（SDK）以实现相关目的。我们会对合作方获取信息的软件工具开发包（SDK）进行严格的安全检测，以保障数据的安全。您可以通过以下连接查看第三方的数据使用和保护规则
    </p>
    <p><br /></p>
    <h3>一. 第三方SDK目录</h3>
    <p><br /></p>
    <h4>Glide SDK</h4>
    <p><b>使用目的：</b>图片加载库，为用户展示图片</p>
    <p><b>使用场景：</b>相册管理功能中用于用户查看视频截屏图片</p>
    <p><b>信息种类：</b>读取设备外部存储空间</p>
    <p><b>共享方式：</b>获取存储权限</p>
    <p><b>第三方主体：</b>开源软件</p>
    <p><b>官网连接：</b>https://github.com/bumptech/glide</p>
    <p><b>隐私政策：</b>开源SDK隐私政策暂未发布</p>
    <p><b>备注：</b>安卓APP</p>
    <p><br /></p>

    <p><br /></p>
    <h4>Ijkplayer SDK</h4>
    <p><b>使用目的：</b>视频播放器</p>
    <p><b>使用场景：</b>视频设备的实时预览和录像回放</p>
    <p><b>信息种类：</b>访问互联网权限</p>
    <p><b>共享方式：</b>获取访问互联网权限</p>
    <p><b>第三方主体：</b>开源软件</p>
    <p><b>官网连接：</b>https://github.com/Bilibili/ijkplayer</p>
    <p><b>隐私政策：</b>开源SDK隐私政策暂未发布</p>
    <p><b>备注：</b>安卓APP</p>

    <p><br /></p>
    <h4>Zbar SDK</h4>
    <p><b>使用目的：</b>扫码功能</p>
    <p>
      <b>使用场景：</b
      >在车辆管理创建任务或者设备管理绑定SN码时，通过扫描摄像头的二维码标签识别SN码
    </p>
    <p><b>信息种类：</b>相机权限</p>
    <p><b>共享方式：</b>获取访问相机权限</p>
    <p><b>第三方主体：</b>开源软件</p>
    <p><b>官网连接：</b>https://github.com/bingoogolapple/BGAQRCode-Android</p>
    <p><b>隐私政策：</b>开源SDK隐私政策暂未发布</p>
    <p><b>备注：</b>安卓APP</p>

    <p><br /></p>
    <h4>IJKMediaFramework SDK</h4>
    <p><b>使用目的：</b>视频播放器</p>
    <p><b>使用场景：</b>视频设备的实时预览和录像回放</p>
    <p><b>信息种类：</b>访问网络权限</p>
    <p><b>共享方式：</b>获取访问互联网权限</p>
    <p><b>第三方主体：</b>开源软件</p>
    <p><b>官网连接：</b>https://github.com/Bilibili/ijkplayer</p>
    <p><b>隐私政策：</b>开源SDK隐私政策暂未发布</p>
    <p><b>备注：</b>苹果APP</p>

    <p><br /></p>
    <h4>YBImageBrowser SDK</h4>
    <p><b>使用目的：</b>查看大图，图片浏览，保持图片到相册，为用户展示图片</p>
    <p><b>使用场景：</b>相册管理功能中用于用户查看视频截屏图片</p>
    <p>
      <b>信息种类：</b>1，请求添加照片至相册权限，用于存储监控截图
      2，允许APP访问您的相册权限
    </p>
    <p><b>共享方式：</b>获取存储权限</p>
    <p><b>第三方主体：</b>开源软件</p>
    <p><b>官网连接：</b>https://github.com/indulgeIn/YBImageBrowser</p>
    <p><b>隐私政策：</b>开源SDK隐私政策暂未发布</p>
    <p><b>备注：</b>苹果APP</p>

    <p><br /></p>
    <h4>SGQRCode SDK</h4>
    <p><b>使用目的：</b>扫码功能</p>
    <p>
      <b>使用场景：</b
      >在车辆管理创建任务或者设备管理绑定SN码时，通过扫描摄像头的二维码标签识别SN码
    </p>
    <p><b>信息种类：</b>相机权限</p>
    <p><b>共享方式：</b>获取访问相机权限</p>
    <p><b>第三方主体：</b>开源软件</p>
    <p><b>官网连接：</b>https://github.com/kingsic/SGQRCode.git</p>
    <p><b>隐私政策：</b>开源SDK隐私政策暂未发布</p>
    <p><b>备注：</b>安卓APP</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'app',
  head() {
    return {
      title: '天翼云 - 智能视图服务'
    }
  }
})
</script>
