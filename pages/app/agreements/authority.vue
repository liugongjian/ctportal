<template>
  <div class="app-article">
    <h1>天翼云瞰App权限描述</h1>
    <p><br></p>
    <h3>ANDROID</h3>
    <table class="table" border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>序号</th>
        <th>权限</th>
        <th>用途</th>
      </tr>
      <tr>
        <td>1</td>
        <td>访问网络连接</td>
        <td>为了能够充分访问网络资源，本APP需要“访问网络连接”权限，注意您的手机<br>是否已连接WIFI网络，否则可能产生GPRS流量</td>
      </tr>
      <tr>
        <td>2</td>
        <td>允许安装应用权限</td>
        <td>为了能够进行升级安装，本APP需要“应用内安装其他应用”权限来进行操作</td>
      </tr>
      <tr>
        <td>3</td>
        <td>允许程序写入外部存储</td>
        <td>为了正常存储用户操作的视频截屏到手机，需要使用写入存储权限</td>
      </tr>
      <tr>
        <td>4</td>
        <td>允许程序读取外部存储</td>
        <td>为了读取用户存储在手机上的视频截屏，需要使用读取存储权限</td>
      </tr>
    </table>
    <p><br></p>
    <h3>IOS</h3>
    <table class="table" border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>序号</th>
        <th>权限</th>
        <th>用途</th>
      </tr>
      <tr>
        <td>1</td>
        <td>访问网络连接</td>
        <td>为了能够充分访问网络资源，本APP需要“访问网络连接”权限，注意您的手机<br>是否已连接WIFI网络，否则可能产生GPRS流量</td>
      </tr>
      <tr>
        <td>2</td>
        <td>允许访问相册权限/请求<br>添加照片至相册权限</td>
        <td>为了用户可以添加相册管理模块的视频截屏图片到用户的个人相册</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'app',
  head(){
    return {
      title: '天翼云 - 视频监控'
    }
  }
})
</script>
<style scoped>
  .table td, .table th {
    padding: 10px;
  }
</style>
