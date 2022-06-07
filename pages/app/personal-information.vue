<template>
  <div class="app-article">
    <h1>个人信息收集清单</h1>
    <table class="table" border="1" cellspacing="0" cellpadding="0">
      <colgroup>
        <col width="33%">
        <col width="33%">
        <col width="33%">
      </colgroup>
      <tr>
        <td colspan="3">个人信息收集清单</td>
      </tr>
      <tr>
        <td>场景/功能业务</td>
        <td>个人信息种类</td>
        <td>场景/目的</td>
      </tr>
      <tr>
        <td>登录</td>
        <td>账号、密码</td>
        <td>用于账号登录</td>
      </tr>
      <tr v-if="pInfoShow">
        <td>附加功能</td>
        <td>终端存储权限</td>
        <td>存储和读取用户对视频进行截图操作后生成的图片；</td>
      </tr>
      <tr v-if="cInfoShow">
        <td>附加功能</td>
        <td>相机权限</td>
        <td>扫码识别视频监控摄像头的SN码时，需要打开相机。</td>
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
  },
  data(){
    return {
      pInfoShow: false,
      cInfoShow: false
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
      } else {
        // @ts-ignore
        window.permissions = p => {
          this.pInfoShow = p
        }
                // @ts-ignore
        window.hasCameraPermissions = p => {
          this.cInfoShow = p
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
