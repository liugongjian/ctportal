<template>
  <div id="ctyun-cn-open-footer">
    <div>
      <div>
        <div class="ctcloud-footer-wrapper">
          <div class="container-wrapper ctcloud">
            <div class="icon-tip-list ctcloud-layout__clearfix">
              <div class="list-item shouhou">
                <a href="/ctyun/services-request">
                  <div class="img-icon"></div>
                  <div>7*24小时售后</div>
                </a>
              </div>
              <div class="list-item shiyong">
                <a href="/ctyun/qiyeshangyun">
                  <div class="img-icon"></div>
                  <div>免费试用</div>
                </a>
              </div>
              <div class="list-item tuikuan">
                <a href="/ctyun/help-refund">
                  <div class="img-icon"></div>
                  <div>7天无条件退款</div>
                </a>
              </div>
              <div class="list-item jingxiang">
                <a href="/ctyun/market-mirror">
                  <div class="img-icon"></div>
                  <div>免费镜像</div>
                </a>
              </div>
              <div class="list-item beian">
                <a href="/ctyun/record">
                  <div class="img-icon"></div>
                  <div>免费快速备案</div>
                </a>
              </div>
              <div class="list-item keyong">
                <a href="javascript:;">
                  <div class="img-icon"></div>
                  <div>99.95%可用性</div>
                </a>
              </div>
            </div>
            <!-- <div class="row-no-gutters ctcloud-layout__clearfix icon-tip">
        <div class="col-md-2 shouhou">
          
        </div>
        <div class="col-md-2 shiyong">
          
        </div>
        <div class="col-md-2 tuikuan">
          
        </div>
        <div class="col-md-2 jingxiang">
          
        </div>
        <div class="col-md-2 beian">
          
        </div>
        <div class="col-md-2 keyong">
          
        </div>
      </div> -->

            <div class="service-menu">
              <div class="row-no-gutters ctcloud-layout__clearfix">
                <div class="col-md-3 left">
                  <div>
                    <div class="zixun">
                      <div>售前咨询热线</div>
                      <div class="phone">400-810-9889转1转1</div>
                    </div>
                    <div class="qrcode">
                      <div class="row-no-gutters ctcloud-layout__clearfix">
                        <div class="col-md-6">
                          <div class="block">
                            <div>天翼云APP</div>
                            <div class="app"></div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="block">
                            <div>微信公众号</div>
                            <div class="wechat"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-9 right">
                  <div
                    class="list-container ctcloud-layout__clearfix"
                    ref="list-container"
                  >
                    <div class="menu-item">
                      <div class="title">关于我们</div>
                      <ul>
                        <li class=""><a>公司概况</a></li>
                        <li class=""><a>大事记</a></li>
                        <li class=""><a>新闻资讯</a></li>
                        <li class=""><a>校园招聘</a></li>
                      </ul>
                    </div>
                    <div class="menu-item">
                      <div class="title">账户管理</div>
                      <ul>
                        <li class=""><a>订单管理</a></li>
                        <li class=""><a>余额管理</a></li>
                        <li class=""><a>发票开具</a></li>
                      </ul>
                    </div>
                    <div class="menu-item">
                      <div class="title">服务与支持</div>
                      <ul>
                        <li class=""><a>帮助中心</a></li>
                        <li class=""><a>备案中心</a></li>
                        <li class=""><a>故障申报</a></li>
                        <li class=""><a>客户公告</a></li>
                        <li class=""><a>合规专区</a></li>
                      </ul>
                    </div>
                    <div class="menu-item">
                      <div class="title">热门产品</div>
                      <ul>
                        <li class=""><a>云主机</a></li>
                        <li class=""><a>对象存储</a></li>
                        <li class=""><a>视频直播加速</a></li>
                        <li class=""><a>视频点播加速</a></li>
                      </ul>
                    </div>
                    <div class="menu-item">
                      <div class="title">友情链接</div>
                      <ul>
                        <li class=""><a>天翼云盘</a></li>
                        <li class=""><a>天翼企业云盘</a></li>
                        <li class=""><a>189邮箱</a></li>
                        <li class=""><a>天翼账号</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ct-frontpage-bottombar">
          <div class="container-wrapper">
            <div class="row-no-gutters ctcloud-layout__clearfix">
              <div class="col-md-7">
                <div>
                  ©<span class="year">2020</span>
                  <span
                    >中国电信股份有限公司云计算分公司版权所有<a
                      href="/ctyun/beian-gov"
                      >京ICP备 12022551号</a
                    >
                    增值电信业务经营许可证A2.B1.B2-20090001</span
                  >
                </div>
                <div>公司地址：北京市西城区金融大街31号1-1613</div>
              </div>
              <div class="col-md-5 links">
                <ul class="link-list" ref="link-list">
                  <li><a>用户协议</a></li>
                  <li><a>隐私政策</a></li>
                  <li><a>法律声明</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ctcloud-layout__clearfix:after,.ctcloud-layout__clearfix:before,.responsive-row:after,.responsive-row:before {
    display: table;
    content: " "
}

.ctcloud-layout__clearfix:after,.responsive-row:after {
    clear: both
}
.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12 {
    float: left
}
.col-md-3 {
    width: 25%
}
.col-md-9 {
    width: 75%
}
#ctyun-cn-open-footer {
    font-family: -apple-system,Noto Sans,Helvetica Neue,Helvetica,Nimbus Sans L,Arial,Liberation Sans,PingFang SC,Hiragino Sans GB,Noto Sans CJK SC,Source Han Sans SC,Source Han Sans CN,Microsoft YaHei,Wenquanyi Micro Hei,WenQuanYi Zen Hei,ST Heiti,SimHei,WenQuanYi Zen Hei Sharp,sans-serif;
    font-weight: 400;
    color: #fff
}

#ctyun-cn-open-footer .container-wrapper {
    max-width: 1170px;
    margin: 0 auto;
    line-height: 17px;
    padding: 23px 0 15px
}

#ctyun-cn-open-footer .ctcloud {
    padding: 0
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list {
    border-bottom: 1px solid hsla(0,0%,100%,.2);
    font-size: 14px;
    float: left
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list div.list-item {
    float: left;
    margin-right: 71px
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list div.list-item:last-of-type {
    margin-right: 0
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list a {
    display: block;
    height: 100px
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list a .img-icon {
    height: 100%;
    width: 42px;
    margin-right: 12px;
    background-size: 36px 32px;
    background-position: 50%;
    background-repeat: no-repeat
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list a>div {
    float: left;
    height: 100%;
    line-height: 100px
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list a:hover {
    color: #f89406
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list .shouhou .img-icon {
    background-image: url(data:image/png;base64,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);
    background-size: 34.9px 32px
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list .shiyong .img-icon {
    background-image: url(data:image/png;base64,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);
    background-size: 38.1px 32px
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list .tuikuan .img-icon {
    background-image: url(data:image/png;base64,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);
    background-size: 32px 32px
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list .jingxiang .img-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABICAYAAAExPcMlAAAAAXNSR0IArs4c6QAADNJJREFUeAHtW3uMXUUZv/fuLgtsEWu7LW2hXaVAg6JEKNFUqTERtNE0+KAJVCJaUh+RAsbWP4jKHyVWTNwANqLVFKkaRVGJsBCVh2kJgolYkIg89lF2t4Xa927bfV1/v9n5Zr8zZ86555x7t/3HL/l2Zr73982cmbnn3i2VPKhWq23AuUIuS4ctGPP1mKSKECyzB+N+oaEtOwFL5PgDSqDkXMDCCBgdlkkrC9jXFnQ/YoXBUZttM2OxWNUWyiCS8DTwCiBdXACcBPCOSV9a0O4BNsnYtSDOAzYLQWfhF6lULpcHdORU6hVNtrA03wjQLMY9wEVAXUlXhzfBEGvRGoBh6kBzI9//KBpTB9OSJ1qIpzxAgoUPyrgC0REMWqhimf0Yb5cxLbSQAaJJWVorPDWbQpAWFmJ1ER7aIRg6yLErpDA9RZZkCfCw8L32DUnS0KHcpgSozDX1b9sqluvOiRgAeYZliTKHNPKMbTmOQCgFVtOs5ojk5AxfBhqNO4hEwNLbKpspGe38mBaWSKS4+yA74JalUuaUDXJs3dBIBTSO5cFYhLF5BkwEVpgNYZCKEHDzTmXArfxDHqAXXS7gdODaTJcIrANfAZ5mg3YKcBiRHPD5sVmgAJRITwwRhtyDETMA5RYot9NQGoiRyDRaBVF+HGM9jRF7cGSmM2JAiFbyfNuGFpVhMdqIAeWiB/1xILcPLuMkaHcLyZNgHbRn9oPphCLogTC9C6RGETJA7wtFG2237euIHNs30AOO9i6CwSg4lb4B532sc8Uu9TRKFPIkimG37Zq9md5lgVTV+WmlGcWzoilyOoIWEM2sCFOEbStRzNJ8YwALYgRCY6KA8Velj/YxKlglHoo7Fc+lQO88HMzZAoE7ldAFoBMeh8x/SEffzZI5WSyxirYLeCoE3UPGPgH0D9EKWh7TvUADTOEF2583KVo+bseRxvJo6H2a0QzGezVB+pAcgjt9ThgWDYkM28hAM9L6yIQ7FHeqLMDDd2+SYOYA4JSLVPaaJHu16Fyne7RQzQDgmDKJ26s2lqPvqpIaQEKpuSnoPW4U444czp0oqhHbCxzTdvx51s6XQYYbD6emB5gbkOBZeiuIGADTd342BCRzOu8B8oGsJ4hKYgAwzJUuQOd/swNxLry6gkgLYNh6SHNedxCJAWCB8BaSxXk9QQwlBoA10AHLSWUvjW1Z/eXSgW4uQA15puMYkjwYfAytczl/zoMH3tHdRyd1UpZaburik+FDHwiUHwV2AH3YDecTJMauJZ7zxRB8VbTtk6EXp7D8lpVgEKwQE3k7kOAcTw6nPkmZcZpzCiCYvcABUbZtLAlLl+lgwN3UA5qstb5bA2nOwbsW6EAbQL8X2G/xQevI3ADQZ3DcJ06BcvCYNQGA2QEhmfPF6M923tDBeBvwFWATjEbWDccE8NYBL9F66P8erNQgpALiHDaMI94aDgHPNNYn/5yHJlZCKhDAu1PJMqDvAVcyILSygFmJb2HswARARVB44pnrjDVE5wyiEED369aOaWDkYju+rZBBX2m0c8VHfFqRMTMvDCgn55efrluBLDPLzWf/KLIdQlsTCgUAxzwps+wHDICPLu/NQcgVAByfCSuxi2bQcpw4iEBYoQhkDgDO+VZPVnPESI7BmwiCU+QgUwBwzickk6yznNyJBCH7QKK4ne9GOaefdth09lIDgCBXub/YTgdNtt6/0mIBcLfs1ABgeE7A+IuKdi76oeNYiYS7SM4klhgABHiU+sAbktB5yBB2TDa5/5pLb2IAMDcrYHK7pdH55bbPgApVgfppAfg8nT2d9wDrqgKq3OY7gc1E0Nn3WKnlti1ahdOyBuBnL1F2o1NPFRLfdYkDaUPZC6+eKsS+6RCjuk3KXmTqqcJ4lilIy16CKFqF47UCqJW9BFC0CkfSAuCFIkv2EkTuKuBkHEsLYCYsy64nm444C7V5q2AuKWkBmJdy8MTHrEd7HH9gw6UT965dqWm2n7kKyN68uAoGgB2qAwbD2T+5ecFE384/jO/v2zz2k+vWekFkrYK7LwYDgFGdPT8jOBh//fmL3eDYkdA7Ql2F+U52qsM3ZebbK5JiAXjZL4HwBOT2TenX7OkqPOVJ89uhyGu6WABQkOzHIPwKDaDlNz272c8IoSrw1dygrx8JwM9eC0N5AjhQGj0WuVRqGdXXVdgB+hvQDb4tjQQAQZ39q8rgVHd8RA4ffHKct3CKEevJo8ubT2gtGAUXQFr2lAS/FThYWf6lnxlN/CnPXPBuNP3Ay1kdDzn/EuzL6AfBBQBuMHs45Tt5GuA6OCtopVT6JWQIKzz+hXbMT8XBapkAwOyAoDz3S8QI6H9Hn1ksdrTXnt7o+i9v/w36nG+Bh6BDWEYCKsKkUqsgFYhkDwN/ohUoX0JDFlbDYLn60mPPCYEtSO9AcypQPyXmu3CY4BSlVoE/Q1gAIcn+H9YxSA5uhJO73CjQAZ+vX/hbgzPQ9gHfasX+iXbC9tlwKlvV2GxENyjCUtW/DYYJqc6VPKtxGMhDrB141PKkyhyazwKWbhoyv6MJ6N9Fr4Bve/TMQ+jyIzk/QXHhjSrF51XfdPmdD1c3v6d+D/osWcMA9nbBGJ+AZrRtGLszQJy48mR13tTa/IQolyvVP0o/rYVtbusx52k6qbzq3VfNqt694vxUoYxM9zE5o3zdYpgOPnFcH6cB3QzkNMwni4ucvy3QayynGay93Bo5Fez6ewvUuFdNJ/BZOsTllsfJtBQASXNm3waMbTt5gqtDdgS6/LWN3oOD5hpaACTOWeY+3FC7wcizEXma7kchuDqC0JBA7Yzz8Kn3JWYwyAYQeR/hu8nYiqi7AEg+66tjvl7+CnAZkBvhk8AfAI8ATxS4X/OJw7oKgOT5nGfZ3Hjb+Kw49dr7MP6GR5vOIb8qdZ/xChcAyWf9tuIOZHNNjYx+Dv76GjKNZLufbhQ6h+2yz7LDh5L/FTL5tZfNtRh/16NN55DXQz668e+sa3mForlX1pIDPyn5W5Tu1arPIhBO1Ergb8qTf7YwGUvw74wgNUrMkvzNUDnZK2FGkUcg8oEumrcZZUle1E52EVqLFCDtrM+TvC7C/TKw7YnaE5qKFIC3qxAUSV7s3ITOySjC1L+LSCQZ2tGATD3Ji7mTUYTRIitA3rVI4I1IXmwlFWGTCDS4PZq7ALhFDSEIuVM3MnnJLVSE1WA2ugh81z1U6CaI85N3+a1A/4bHS44+5zEsDJ3Q/IynvQ3jDR6t6ND8cCP3CrDeNqOdzuTpZjpXAt9amr0s9wrA7P8Ywa1hhApqzvzYj665pTq8/2tOp6llZ8uqjVeV5lyU+FndyjZ6JfCrGvfWKO1Md7FKJyH5reDzQpNoa/wXN15RPdAffYarE3OrL+1YWFm66mGxn9A+Avoi4IWKz1f+c4F/VrRaXb4lYvKyfxl53uszQVLyMHg9Ddh9gZ8Q46uqOso9Iw7hH+XE5SZ/mEn6pxWTGyOh1p7Ae4tb8kZD/clUgFrJ0559pviPbUyW7wkSVwTlC8A6q5O1CHwLxPeCoXuLc1+zAFmSd9bQsQ73QI8rgW+D2zS/zn5SETjL8lKFxzTfDifdWCMhpJ4CeZPXlhkA8CBwoLSvd7/m1dlnEfi9pAa+bfomfVmfmZKngcQC1JO8RAYbpwPXV67c8FOh6bbccenHMd4BXAnkzsxlq4NnnzRuYMPAg0BuZLwf3AfUsBa+fqgJWfrBAhRNHnr8vnUNsA/I4LkcN5UqTfzeNAk6wOC9Yg9wN/BR4GV2Nvl72z1AbmIHgHypaY4wtNdBru4ixAqAuEPn/FY4NLs9nEYA8p8EvgBkwtxwqH9ORChpMHb8cIB1EWi/oz0LT6H9cECO+03dRYgUAI5qJg+Z5UD5Cp5J/xb4zkCA/wLtUwiyPNF1O5dsDKrdzz5KPhh8v/hF4OsxoVLp/aD9BT4FHkFnqchBnUXYJmPbZn4cXAFgNJg8DHaC96B4x/gJ4DKgD7tAuAHIf9EkvAv4gC8UGkNuFHgP8BwgC8KTYz1wb0D+StCesfFMoOUt9HZgoSKYAsAId9E1QB8+B8JzwE/4DIz5bp1HD794JywEbgGaZzQgn5kEG/zW9w5gO5AFmQncCDziGSHvauCLQLkYaRGuhC9ogt+XFfBfnxEYD4PGV9ezGRSA/+K7CUj6tAJ8cAO8FXgGkEnzx+f87Qh/nFILDqUJmALA5sMQOhv4kBIeQn8LcBGdAjjTG4BZiqXMNL6LGPgvYfz1jvmvH3g4F7gVyJgJE0CeJnMhcz8JSdAsDAj2o89zufEw7gKL2K6Wq/6SjvCzDhD7a5C93mJWNSMnj0AupbzCzTd3dVUqlVVYuzJDMFG+t2Vd1+fz2vq/fIMr8D/D4ONRqY2IuwAAAABJRU5ErkJggg==);
    background-size: 28.4px 32px
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list .beian .img-icon {
    background-image: url(data:image/png;base64,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);
    background-size: 28.5px 32px
}

#ctyun-cn-open-footer .ctcloud div.icon-tip-list .keyong .img-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABKCAYAAAF89WIuAAAAAXNSR0IArs4c6QAADHhJREFUeAHtWwuwVVUZPvuec8ALpOaDlzJTyiRTOEozpUlhgFjXHBoxiJxCSmc0aniINVMZjVZCZoExlKIigYWE1R0fgGCgMA4KU9LoUIkOKYGAFwF5c865u+9b7H+dtddee599HvfeceSf+Vn/+t/rvfa6h0zGAt/3ewL7CLtJCJYQvIXiNmAWdH9gPy8Q+Cg/DdzBOoDleSREYQDoEhkGKKUmuNnhed52QyDkUkVA4WoSJ2Z/EaSKy9hEQn8J4cOLB0YOur2VJfIgL6BVC9qkQlOhQ80UplnSpcBSGC4IKhJGZOUSSv2A2lCHAPNq4F6oMrHeoPvTTLcCtOo5MgG6J9lRfvHhr991kq//pXIzayqEf3DvDC0qE69rhTIvTKGfdnKItwqbiQWoO0rJwAwzxAKlbqbBC5F6MOBEejGD2N8SLa0gDCmZi9CO8jCcHCA/5ABGL4HHqRkHZmdTZ4+MxCuoDAb2Ap4BjAOZ89oRR4ozdjBS8gpzWg7FWQZ8MRRHqhfnm0bFBTdONOsO+ncRHrIgfIiCYO1wSsqg2iV1BwJPCzkiN4CeIUFQEaFLpnmBkl57WgCCMrMutD2MTiWtjI4WWsoIQwRSIvA5oLsBj8B+v/CldDqAEfn9RMku4Win8CKLAcZ5CBcDtwEfB0aCQEdP85AQgqQ+GAVnW4AamInafmDHTLj7tgO5E9swG4zVAU4UIezyKoMg8n8gGCFCR3k6eP8CMgADKeBaeE9R80ZfH/DiCuodA4aOAqbOKXxroVBYisWkFwl4LrjQZqpRQGc8gCnS1xamqSsHStHz7kljYOpwFJQD9MOY/JQVJx08/1tZ86ZuLE0HnJ5/Fo3i5qdWCe0oXxWezEZzGDeCeZkoICs92wIe1/8bwH7Q2yV6qoRyDyBBj6+pAP5sJfX9NSY/QlMpwgQjMJ7pkpVHwSUN846Gqydr1Thw2Wf0WS7SuGaI3C5tBzdC4fO2Euq8tNzl4Ec3C5eSzUOW3OK41aWBEwju3KhpHNqQkrwhKHe6c5N0UshKSGa3qZeYAIJmocyt1bXJmX6Eng7iMakklLpXIgkgKGdWyTLmPvZj4B8tPqvslV8CuWWbMBeVWSbDptEbO0MJILi5kP4Ng5G2UYr6BdBZb+jdDnqJUTfJdpUA4vI6cCiQ8OrNnZ6TjJOtVrgChssCY477J12OJAFpOceme2F2yxw/40+hQVP/i7+SHXfPBpdxCh7venKSrgP9NduGLdWThsGVgudPEsU6gtMFr7GvBb6GBWWo4IQbG+Kw4nsby7yjoXlS5qemHk3QPMwE9GEkirkeA4YLXbzv+jeFrrGcEGN3DD1+oAn/jBMFDMdh0t4t8ws45Lm0eJRkU9wWqOoC3mUGBgLzpN2FuO+SL5OwD2g5JdUqoLAwt2VopuSvzU9dqVZDlSuDXyt/pR8A9xFeaRjYeehSSQ5OxFFgzAMlDv0DjTywL9D+BBisrMv//ChkWKkCO7keiIvYg8T2JQZBGbf52GbuuuGslgRmuL1GuVwFXQpdnoB9o3H1xtkcDpcggfdMgiwkqmuXQ15sQC8gt3DeHZhoAXgUy03tKaAToaYEELiak7INyZyIy6KqBBCYpxuP7lrgbSQSGcrUCSA4d0t2cz3wDpLgEGlIlQCC94fFTcAW4EVAjjsvGeuAi4CvAtNCKInEBBCYQR9K6Zmft5cD4/f6siM9HM4EEPgS6G4u61dFvQztaytZYCh2UieyESH43eDbwVeDdynwPAd+DzyedgJDQLA3nI0TJcRRJ2xICcwnoWBm/yfUp4lRhZLJvQg0G3U+6pGZL37YCzoBBL8ZggdFiHIo8L9GPS35PBTlEkIbJuYEnQCCc3kVDa0Pg+5h1KslzSSSvi8OSHdtNyKMQGZ8uKgHroSxdP0g0M0xzpp5LefOJm9zvCiuPTGn5R+ZFxZw7dcDvJIJ2JNa+Hn2QKvUUJ4M6vtDCpuWbarjMkqXXGZyBnDjcoHHBK4SCVq/T2hVZpvMoQmJUlb4QSswTAijLMkcIE8+obTca+r2mq7URjxqmI03aCGPmwlEb8F++2mi2YBSP6IZvg6ZCUQnSrHwKUO5XvJc2wGGvGgmwF0rBPhCVttliFl75W3LVE1QMwG9BXsZ76BW3rCI94BGwN9NJ2h9G+tmAtwwFCCBW4Qublz6gtA1lLw/CPBcEdD3RSbwlHCxKZ1JOjdt+ZIyr725tPg7piMRpSl/Yyg9F9B8KeO7gQImcENAs3hDaK/J01832cLBfwq/ipI7rJwn+wM7fvjyJqVBnYZo+VFwZMkNg9J6amAnLOJPftfmpyxfCR0m25f8lPA/6MlpeylovpaqcTftJQEGZxICPaBs1oXPL+izUJFkNd8iOKxDAt42lB+DP/O0tdRRheM7gCbw7h8LUDwDaH+as/6y6STWgUsAw7WmMejZLj0XD7r8TUC7ZS9zwGXi5sHBEtOJWyvKhU2baQe6+uDiFsYzxZnwKpXQ1wlU0jXl5kZk8p0T0FRoFB2XQKP8V/RzKoEu74FcpUHiaqikU488rgdW1eO0Gls5LCI2aDgPninAPhGhm3EE7A3Y8//gFru5sQm41evnomF5eOEuya+luBGoFIhvENyr+OuIQiXlJHmHdwAazHnOV/tKJ3hSnmlkx6D0XsVT3/LUIR2ARnNkeW1p5KXeSj2xygv/u+iMiq9VDe0ANJyjzJeNhvpNbGqykDvoPnQEZ4cT6k4UjebTzijgTcCrgOq7AmW1wGv734D8Cx5v5BVHDzppoQRFPo5GfNbUAWj0GDj8OXBQ2gxq1HsddrOAK2q0t8307xFFkLoD0OhxMHoEmOaey6n3CnAbkB9he4IShTrWegflR1FeDEyTB3f9aUA+o9YDfIJTfy6lk8TAaDSftR4DfonKMXAc/EXA+4Dh160YgwQ29w+e/ROA3RP0noXs20Ce/bVA/G9HxBsafy/o6VK3ygOofxe4xuI3ujoCDucBeYy64H4wf+oSpOCp5RCZAWj452DMzYgXFhueA4Prn5eYzgTORC6/KxxBeREaC9zkkFVi7QndxND4m2GxDmg3nmuGTwvDUXJ9dzYcQkA28rNAe5kx11bgeGC10Et3ABr/E1g/6PCwGA0/G7g1kCWtTYd5Q1ncVAcDH3d4/RV43CSrge5qCaDx34DVIoflLDT8B+QX57RMwJvL70njRy1+JtvtpUyvs1pzn5nQmrloePk1lQqdA8yL+5ANk8HgXSIV8K80PNYecmivlMZThrfqiaKDL1TPL564PLN/992ZfDZyuRC9Di5nwv9aR4x7weONNA2oO/v3oWnf2dmob4Y9eB8P11HL5TZnLhimn5oj8o5ncMrbA8C2TEoZusA94MsO5Wcx+rtCfN9xFHlNPA67Et5BcF6bbfiCzYipH2UHXOgQRo4ULIE2W89vLw2weV1Q3+yI+REHz2a1Y5DVzwdtAevRG1aTtzqiWCoOzCz/xcAIv3MZvCLbYC8LW876Xv7DGSDHG+sCnxBCSvysdqHQZlnc9uIMs94F9CBHzLccPJPFXzIVyGAHLDMlAT0ep0Mvk5+f/PR6/O0u8iHiF46NLM6/4TZTtxNpnmCjHfGecPCEtQeN54OJAnYA79r8oDGB/MjRmMtmxqITonvBkX3Ti/OuW2g66CSalx/magIfPx4xGQHNRvO3SkVTxl/w8hJzq8kM6K9iFoSmtzd5xfGcl8d/qNM/OddmmAmjCnNHN+q7XftNIHgEukb/h+Cbe5iPOh9DOO1Jh0D1HgQLweXFwoY70QlzTaY39YndueZ8H9wH3xQ+7I94Tdmh3SY/eQl4PJpKIuug8mfwe7vDN3NdGvCZAxvOUVfr3aEffg9AY++EUmjUAyM29jI44uOGhsKca+7ArXhrbuoKCapl8OWhcjqwp2bWT/DPtk8Dz3e44nL4NZAXM74OR0bbYRPuACog8ZEoVgHttUUx+WPgvOrbH/zyhsYOsW+dYFUEfn4/DLzSockj7xrk9IxDVhuLowdsBcbBdghG1Oa9bAUfOSD/tn0m8BxgH6D5X2THor4DGAfMkTOtYwDO+Xv6NXHRA/6WRkeH3y0VYjInHoGdBwg4DVhwJBY5FuvNCjH03/uNeIxd7fd+vamE7ZHADCMhITurA1ybczjBGmquja4GN+9fk1Md8P4du8Zk/oGfAbkG9GMzdsPr4KdR198sfPHi0ylQbQfwfd4Gnsd/sZkdUHfF7oAwFVxitCcBS3IGdkJZRAzX12qFTE+JU/XA/wFLsk8+ikzD+gAAAABJRU5ErkJggg==);
    background-size: 27.7px 32px
}

#ctyun-cn-open-footer .ctcloud .service-menu {
    padding-top: 20px
}

#ctyun-cn-open-footer .ctcloud .service-menu .left {
    position: relative
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div {
    padding-left: 42px
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div .zixun {
    line-height: 27px;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 50px
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div .zixun i {
    vertical-align: middle;
    font-size: 60px
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div .zixun .phone {
    line-height: 27px;
    font-size: 18px
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div .qrcode {
    font-size: 12px
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div .qrcode .block {
    width: 80px;
    position: relative;
    padding-top: 27px
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div .qrcode .block div:first-child {
    position: absolute;
    bottom: 90px;
    width: 104%;
    text-align: center
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div .qrcode .app {
    background: url(https://www.ctyun.cn/layout/img/app-qrcode.2c77c24.png) 50% no-repeat;
    height: 80px;
    background-size: contain
}

#ctyun-cn-open-footer .ctcloud .service-menu .left>div .qrcode .wechat {
    background: url(https://www.ctyun.cn/layout/img/wechat-qrcode.f63dc9f.png) 50% no-repeat;
    height: 80px
}

#ctyun-cn-open-footer .ctcloud .service-menu .left:after {
    border-right: 1px solid hsla(0,0%,100%,.2);
    position: absolute;
    height: 240px;
    right: 0;
    content: "";
    top: 0
}

#ctyun-cn-open-footer .ctcloud .service-menu .right>div {
    padding: 48px 0 30px 75px
}

#ctyun-cn-open-footer .ctcloud .service-menu .right>div .menu-item {
    width: 20%;
    float: left;
    padding-right: 20px;
    box-sizing: border-box
}

#ctyun-cn-open-footer .ctcloud .service-menu .right>div .menu-item .title {
    font-size: 14px;
    margin-bottom: 14px
}

#ctyun-cn-open-footer .ctcloud .service-menu .right>div .menu-item ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 12px
}

#ctyun-cn-open-footer .ctcloud .service-menu .right>div .menu-item ul>li {
    margin: 0;
    padding: 0;
    line-height: 18px;
    padding: 11px 0;
    cursor: pointer
}

#ctyun-cn-open-footer .ctcloud .service-menu .right>div .menu-item ul>li a {
    color: hsla(0,0%,100%,.6)
}

#ctyun-cn-open-footer .ctcloud .service-menu .right>div .menu-item ul>li.highlight a,#ctyun-cn-open-footer .ctcloud .service-menu .right>div .menu-item ul>li:hover a {
    color: #f89406
}

#ctyun-cn-open-footer .ctcloud .service-menu .right>div .menu-item:last-of-type {
    padding-right: 0
}

#ctyun-cn-open-footer .ctcloud-footer-wrapper {
    background-color: #31313b
}

#ctyun-cn-open-footer .ct-frontpage-bottombar {
    background-color: #29292e;
    font-size: 12px
}

#ctyun-cn-open-footer .ct-frontpage-bottombar .year {
    margin-right: 5px
}

#ctyun-cn-open-footer .ct-frontpage-bottombar .links {
    text-align: right;
    line-height: 12px
}

#ctyun-cn-open-footer .ct-frontpage-bottombar .links ul.link-list {
    padding: 0;
    list-style: none;
    margin: 2px 0 0
}

#ctyun-cn-open-footer .ct-frontpage-bottombar .links ul.link-list>li {
    margin: 0;
    padding: 0;
    display: inline-block;
    padding: 0 4px;
    border-right: 1px solid;
    cursor: pointer
}

#ctyun-cn-open-footer .ct-frontpage-bottombar .links ul.link-list>li:last-of-type {
    border-right: none;
    padding-right: 0
}

#ctyun-cn-open-footer img {
    border: none
}

#ctyun-cn-open-footer a {
    color: #fff;
    text-decoration: none
}

</style>