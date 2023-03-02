<template>
  <div ref="container" class="video-container"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import HlsJS from 'hls.js'

export default Vue.extend({
  layout: 'app',
  head(){
    return {
      title: 'VSS Player'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const title = this.getQueryVariable('title')
      document.title = decodeURIComponent(title) || '天翼云 - 智能视图服务'
      const videoUrl = this.getQueryVariable('video')
      const url = window.atob(decodeURIComponent(videoUrl))
      const videoElement = document.createElement('video')
      const container = this.$refs.container as HTMLDivElement
      container.innerHTML = ''
      videoElement.muted = true
      videoElement.controls = true
      videoElement.autoplay = true
      container.append(videoElement)
      if (!HlsJS.isSupported()) {
        videoElement.src = url
        videoElement.addEventListener('loadedmetadata', function() {
          videoElement.play()
        })
      } else {
        const hls = new HlsJS({
          manifestLoadingMaxRetry: 2,
          manifestLoadingTimeOut: 600000
        })
        hls.loadSource(url)
        hls.attachMedia(videoElement)
      }
    },
    getQueryVariable(variable: any): string {
      var query = window.location.search.substring(1)
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=")
        if(pair[0] == variable){return pair[1]}
      }
      return('')
    }
  }
})
</script>
<style lang="scss" scoped>
  .video-container {
    ::v-deep video {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #000;
    }
  }
</style>
