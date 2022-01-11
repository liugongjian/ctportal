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
                    <p class="desc">V1.0.0</p>
                </div>
                <div v-if="isMobile" class="os-desc">
                  <p>适用于安卓手机</p>
                </div>
                <div class="btns">
                    <button><a href="http://vss.gz2oss.xstore.ctyun.cn/vss/android/prod/latest/vss-android.apk">立即下载</a></button>
                </div>
            </div>
            <div class="downloadBox">
                <div class="os">
                    <p class="device">IOS</p>
                </div>
                <div class="icon-border">
                    <img src="@/assets/images/download/ios.svg" alt="">
                </div>
                <div class="instruction">
                    <p class="desc">V1.0.0</p>
                </div>
                <div v-if="isMobile" class="os-desc">
                  <p>适用于IOS手机</p>
                </div>
                <div class="btns-in-dev">
                    <p>上架中，</p>
                    <p>敬请期待</p>
                </div>
            </div>
            <div v-if="!isMobile" class="downloadBox">
                <div class="os">
                    <p class="device">Windows</p>
                </div>
                <div class="icon-border">
                    <img src="@/assets/images/download/windows.svg" alt="">
                </div>
                <div class="instruction">
                    <p class="desc">V1.0.0</p>
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
    <div v-if="isNewBrowser" class="shade">
      <img src="@/assets/images/download/h5-shade.png" alt="">
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: 'download',
  data(){
    return {
      isMobile:false,
      isNewBrowser:false
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
body{
  background: #F8F8F8;
}
.banner{
  margin: 0 auto;
  .container{
    width: 77rem;
    margin: 0 auto;
    .bd{
      padding-top: 4.3rem;
      text-align: left;
      .logo{
        width: 13.6rem;
        display: inline-block;
        padding: 0;
        margin: 0;
        font-size: 0;
        img{
          width: 100%;
        }
      }
      .title{
        display: inline-block;
      }
      h1{
        font-size: 5.2rem;
        font-weight: normal;
        color: #101010;
      }
      h2{
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
    margin: 9rem 0;
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
      .os{
        margin-bottom: 2.9rem;
        .device{
          font-weight: 400;
          font-size: 2.6rem;
          line-height: 3.8rem;
        }
      }
      .icon{
        width: 10.3rem;
        img{
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
        img{
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
        button{
          background: rgb(238, 21, 21);
          border-color:rgb(187, 187, 187);
          display: inline-block;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid #DCDFE6;
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
      .btns-in-dev{
        padding-top: 2.7rem;
        @media only screen and (max-width: 499px){
          padding-top: 2.8rem;
        }
        p{
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
    .download{
      flex-direction: column;
      border:none;
      box-shadow:none;
      .downloadBox{
        display: grid;
        grid-template-columns: 13rem 1fr 1fr;
        grid-template-rows: repeat(3, auto);
        place-items: center center;
        grid-column-gap: 3rem;
        border: 1px solid #BBBBBB;
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
          transform: scale(0.7);
          transform-origin: 0;
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
            line-height: 3.2rem;
          }
        }
        .os-desc{
            font-size: 0.6rem;
            color: rgb(206, 204, 204);
            grid-column-start: 2;
            grid-column-end: 3;
            justify-self: start;
            transform: scale(0.7);
            transform-origin: 0;
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
}
</style>

