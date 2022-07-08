<template>
  <div class="app-article">
    <h1>个人信息收集清单</h1>
    <table class="table" border="1" cellspacing="0" cellpadding="0">
      <colgroup>
        <col width="25%">
        <col width="25%">
        <col width="25%">
        <col width="25%">
      </colgroup>
      <tr>
        <td colspan="4">个人信息收集清单</td>
      </tr>
      <tr>
        <td>使用场景</td>
        <td>个人信息种类</td>
        <td>使用目的</td>
        <td>收集内容</td>
      </tr>
      <tr>
        <td>登录</td>
        <td>用户账号信息</td>
        <td>用于账号登录</td>
        <td>{{userName}}</td>
      </tr>
      <tr v-if="pInfoShow">
        <td>附加功能</td>
        <td>终端存储权限</td>
        <td>存储和读取用户对视频进行截图操作后生成的图片；</td>
        <td>开启存储权限</td>
      </tr>
      <tr v-if="cInfoShow">
        <td>附加功能</td>
        <td>相机权限</td>
        <td>扫码识别视频监控摄像头的SN码时，需要打开相机。</td>
        <td>开启相机权限</td>
      </tr>
    </table>
    <br>
    <p v-if="pInfoShow || cInfoShow">附加功能在特定场景下用户使用相关功能时才会申请询问，用户拒绝不影响用户使用基本功能。</p>
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
  },
  data(){
    return {
      pInfoShow: false,
      cInfoShow: false,
      userName: ''
    }
  },
  mounted(){
    this.show()
  },
  methods:{
    show(){
      // @ts-ignore
      if(typeof app !== "undefined"){
        // @ts-ignore
        this.pInfoShow = app.hasStoragePermissions()
        // @ts-ignore
        this.cInfoShow = app.hasCameraPermissions()
        // @ts-ignore
        this.userName = app.getUserName()
      } else {
        // @ts-ignore
        window.permissions = p => {
          this.pInfoShow = p
        }
        // @ts-ignore
        window.hasCameraPermissions = p => {
          this.cInfoShow = p
        }
        // @ts-ignore
        window.getUserName = n => {
          this.userName = n
        }
      }
    }
  }
})
</script>
<style scoped>
  .table td {
    padding: 10px;
  }
</style>
