<template>
  <div style="position:relative">
    <div :class="isMobile ? 'mobile' : ''">
      <section class="banner">
        <section class="container">

          <div class="bd">
            <div class="logo">
              <img src="@/assets/images/download/ctyun_logo.png" alt="">
            </div>
            <div class="title">
              <h1>天翼云瞰</h1>
              <h2 class="mt-10">天翼云视频监控客户端</h2>
            </div>
            <div class="use-help">
              <h5>首次使用指引：</h5>
              <p>1、注册天翼云账号并开通天翼云视频监控服务。</p>
              <p>2、点击下方的客户端链接完成下载并安装客户端。</p>
              <p>3、输入天翼云视频监控登录账号或邮箱以及设置的密码，开始使用天翼云瞰软件。</p>
            </div>
          </div>

          <section class="download">
            <div class="downloadBox">
                <div class="os">
                    <p class="device">Android</p>
                </div>
                <div class="icon">
                    <img src="@/assets/images/download/qr_android.png" alt="">
                </div>
                <div class="instruction">
                  <!-- 20220916 update from 1.4.1 to 1.4.2 -->
                    <p class="desc">V1.4.2</p>
                </div>
                <div v-if="isMobile" class="os-desc">
                  <p>适用于安卓手机</p>
                </div>
                <div class="btns">
                    <button><a href="https://vss.guiyang.vcn.ctyun.cn/app/android/latest/vss-android.apk">立即下载</a></button>
                </div>
            </div>
            <div class="downloadBox">
                <div class="os">
                    <p class="device">IOS</p>
                </div>
                <div class="icon">
                    <img src="@/assets/images/download/ios_qr.png" alt="">
                </div>
                <div class="instruction">
                  <!-- 20220916 update from 1.4.0 to 1.4.1 -->
                    <p class="desc">V1.4.2</p>
                </div>
                <div v-if="isMobile" class="os-desc">
                  <p>适用于IOS手机</p>
                </div>
                <div class="btns">
                    <button><a href="https://apps.apple.com/cn/app/天翼云瞰/id1609919930">立即下载</a></button>
                </div>
            </div>
            <div class="downloadBox">
                <div class="os">
                    <p class="device">Windows</p>
                </div>
                <div class="icon-border">
                    <img src="@/assets/images/download/windows.svg" alt="">
                </div>
                <div class="instruction">
                  <!-- 20220518 update from 1.1.0 to 1.1.1 -->
                    <p class="desc">V1.0.0</p>
                </div>
                <div v-if="isMobile" class="os-desc">
                  <p>适用于PC端</p>
                </div>
                <div class="btns-in-dev">
                    <p>上架中，</p>
                    <p>敬请期待</p>
                </div>
            </div>
          </section>

        </section>
      </section>
    </div>
    <div v-if="isNewBrowser&&!clicked" class="shade">
      <img src="@/assets/images/download/h5-shade.png" alt="">
      <button class="btn" @click="() => clicked = true">我知道了</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: 'download',
  head(){
    return {
      title: '天翼云 - 视频监控'
    }
  },
  data(){
    return {
      isMobile:false,
      isNewBrowser:false,
      clicked:false
    }
  },
  mounted(){
    this.isMobile = this.isMobileBrowser()
    this.isNewBrowser = this.isweixin() || this.isqq()
  },
  methods: {
    isMobileBrowser(){
      return this.detectMobileBrowser(navigator.userAgent||navigator.vendor||window.opera);
    },
    detectMobileBrowser(a){
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){
        return true;
      }
      return false;
    },
    isweixin() {
      return /micromessenger/i.test(navigator.userAgent.toLowerCase());
    },
    isqq() {
      return navigator.userAgent.indexOf('YYB_D ') > -1 || navigator.userAgent.indexOf('QQ/') > -1;
    }
  }
});
</script>
<style lang="scss">
html{
  @media only screen and (min-width: 1350px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 850px) and (max-width: 1349px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) and (max-width: 849px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 500px) and (max-width: 599px){
    font-size: 9px;
  }
  @media only screen and (min-width: 300px) and (max-width: 499px){
    font-size: 8px;
  }
  @media only screen and (min-width: 200px) and (max-width: 299px){
    font-size: 6px;
  }
}
</style>
<style lang="scss" scoped>
body {
  background: #F8F8F8;
}
.banner {
  margin: 0 auto;
  .container {
    width: 80vw;
    max-width: 77rem;
    min-width: 40rem;
    margin: 0 auto;
    .bd {
      padding-top: 4.3rem;
      text-align: left;
      .logo {
        width: 13.6rem;
        display: inline-block;
        padding: 0;
        margin: 0;
        font-size: 0;
        img {
          width: 100%;
        }
      }
      .title {
        display: inline-block;
      }
      h1 {
        font-size: 5.2rem;
        font-weight: normal;
        color: #101010;
      }
      h2 {
        font-size: 2rem;
        font-weight: normal;
        color: #484545;
      }
      .use-help {
        margin-top: 5rem;
        color: #85888c;
        h5 {
          margin-bottom: 0.6rem;
          font-size: 1rem;
          color: #484545;
          font-weight: bold;
        }
        p {
          margin-bottom: 0.6rem;
          font-size: 1rem;
          // line-height: 1rem;
          color: #484545;
        }
      }
    }
  }
  .download {
    margin: 9rem auto;
    @media only screen and (min-width: 850px){
      margin: 6rem 0 !important;
    }
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border: 1px solid #BBBBBB;
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 6px;
    .downloadBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      .os {
        margin-bottom: 2.9rem;
        @media only screen and (min-width: 850px){
          margin: 0 !important;
        }
        .device {
          font-weight: 400;
          font-size: 2.6rem;
          line-height: 3.8rem;
        }
      }
      .icon {
        width: 10.3rem;
        @media only screen and (min-width: 850px) {
          height: 100%; // 兼容IE
        }
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .icon-border{
        width: 10.3rem;
        height: 10.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(206, 204, 204);
        border-radius: 1.5rem;
        img {
          width: 6.1rem;
        }
      }
      .instruction {
          text-align: center;
          font-size: 1rem;
          .desc{
            color: rgb(206, 204, 204);
          }
      }
      .btns{
        padding-top: 1.5rem;
        @media only screen and (min-width: 850px){
          padding-top: 0.5rem !important;
        }
        button {
          background: rgb(238, 21, 21);
          display: inline-block;
          line-height: 1;
          // white-space: nowrap;
          cursor: pointer;
          border: none;
          -webkit-appearance: none;
          text-align: center;
          box-sizing: border-box;
          outline: none;
          margin: 0;
          transition: 0.1s;
          font-weight: 400;
          -webkit-user-select: none;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          border-radius: .3rem;
          a{
            color: #fff;
          }
        }
      }
      .btns-in-dev {
        padding-top: 2.7rem;
        @media only screen and (max-width: 499px){
          padding-top: 2.8rem;
        }
        @media only screen and (min-width: 850px){
          padding-top: 1.3rem !important;
        }
        p {
          display: inline-block;
          font-size: 1rem;
          line-height: 1rem;
          color: #484545;
        }
      }
    }
  }
}
.mobile{
  .container{
    .bd{
      .use-help{
        h5{
          font-size: 2rem;
        }
        p{
          font-size: 1.8rem;
        }
      }
    }
    .download{
      flex-direction: column;
      border:none;
      box-shadow:none;
      .downloadBox{
        display: grid;
        grid-template-columns: 13rem 1fr 1fr;
        grid-template-rows: repeat(3, auto);
        place-items: center center;
        grid-column-gap: 1.5rem;
        border: 1px solid #BBBBBB;
        border-radius: 6px;
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 6px;
        margin-bottom: 3rem;
        .icon{
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 4;
        }
        .icon-border{
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 4;
        }
        .os{
          grid-column-start: 2;
          grid-column-end: 3;
          margin:0;
          justify-self: start;
        }
        .instruction{
          grid-column-start: 2;
          grid-column-end: 3;
          text-align: left;
          justify-self: start;
          // transform: scale(0.7);
          // transform-origin: 0;
          p{
            font-size: 1.5rem;
            color: #484545;
          }
        }
        .btns{
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 4;
          padding: 0;
        }
        .btns-in-dev{
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 4;
          padding: 0;
          p{
            display: block;
            line-height: 2rem;
          }
        }
        .os-desc{
            font-size: 0.6rem;
            color: rgb(206, 204, 204);
            grid-column-start: 2;
            grid-column-end: 3;
            justify-self: start;
            // transform: scale(0.7);
            // transform-origin: 0;
            p{
              font-size: 1.5rem;
              color: #484545;
            }
        }
      }
    }
  }
}
.mt-10 {
    margin-top: 1rem;
}
.shade{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  img{
    width: 100%;
  }
  .btn{
    position: absolute;
    bottom: 8%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 24.82667rem;
    height: 12.33333rem;
    padding-bottom: 0.04rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAADICAMAAACK74UcAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMAvz91ivoFCrfi5u7Lpo8gaTQnLBP0g07rsVJjDt5w09nEQwF6EaoXA1qfSTH88Bs6vJNUhAYebQAACDxJREFUeNrs3Gt3mkAQBuChsoiAgHKNFUHwEtOY6/v/f1sXk57TC7amJzVDnecrH4fZndlZIPHPNAWWJPjbAg4J/m6BkgR/GfBIgr8UMEnwZwAzEuytFbAlwd5nSHXeC4/AggR7wR64J8GeCdgk2Bu6wJfjT0kwEQJVQ0ekSjphJqwRsPhNPYiYBAch4AypW62AMQkOfpdQUxfwZJPiYXE8odYVMJK6nYe1ezShLANIbkmw4AOVRZ1uIEe1bEwVkFGnAYABCR5swKBO2R64IcHDDNjfUpfbBDAsEiwMR8ATddmOgEI6XS5MwFl3RtAD3CkJHiIF7KhDswFUTYKHa+9YJZECCEkwsQKSKXXYAfBJMDFNjvRJDwqwr0nwcL0EvK5wBDlQzkkwkQEqol/NSyAP6O9Y2ygg8a4me6y6Es0G1AO9XfBsPubQnkm8q7qmDk8AdvRG8+ypwAu5G30eIYCU3iQODYVXe6fcyADrDGoFbBo63XxnKxy4dprdNyTOYXr3ptF7U28SHHjpg9Tz5xMXwGhLJ9quChwYoXxgcFbW8vTRe/PlSqHlDWRPOrfPwD6jUwzDCq3clxP2DxCeOHoP/Du0jJ0MFj+Etavpzz5t9tBcU5KJsSbz0KpCuZbJmPW5Qsv+Iv0SY8PFCFryFJHga5260O5M6Zk4W6d30JyBzKk4i1/CVIRSjnMWmwm0cieneZzNX8P0LIUeb1fQypmEibsS8DIJE3/3ZkbsWNFsdbMsi1zhv6PyolzerGZR3yu368nATnABEnsw6W/9NvFzXJDcn1APzQclLk7Zu0OG9hDrG8f2wzoK4r6v4x2sOIjq0Lcd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) no-repeat;
    background-size: 100% 100%;
    font-size: 2.21333rem;
    line-height: 2.2rem;
    color: #fff;
    border: none;
    outline: none;
  }
}
</style>

