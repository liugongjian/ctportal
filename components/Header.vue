<template>
  <div class="header">
    <div class="header__container">
      <div class="header__left">
        <div class="header__logo">
          <NuxtLink to="/"><img src="~/assets/images/logo.svg" /></NuxtLink>
        </div>
        <div class="header__title">视频网络</div>
      </div>
      <div class="header__right">
        <div class="header__navigation">
          <div
            class="header__navigation__item"
            :class="{'actived': currentPage === 'index'}"
          >
            <NuxtLink to="/">首页</NuxtLink>
          </div>
          <!-- <div
            class="header__navigation__item sub"
            :class="{'hovered': currentSubMenu === 'prod'}"
            data-menu="prod"
            @mouseenter.self="showSubmenu"
            @mouseleave="hideSubmenu"
          >
            产品<svg-icon name="arrow-down" width="10" height="10" />
          </div> -->
          <div
            class="header__navigation__item sub"
            :class="{'hovered': currentSubMenu === 'solution'}"
            data-menu="solution"
            @mouseenter.self="showSubmenu"
            @mouseleave="hideSubmenu"
          >
            解决方案<svg-icon name="arrow-down" width="10" height="10" />
          </div>
          <div
            class="header__navigation__item"
            :class="{'actived': currentPage === 'ai'}"
          >
            <NuxtLink to="/ai">AI能力</NuxtLink>
          </div>
          <div
            class="header__navigation__item"
            :class="{'actived': currentPage === 'developer'}"
          >
            <NuxtLink to="/developer">开发者</NuxtLink>
          </div>
          <!-- <div
            class="header__navigation__item sub"
            :class="{'hovered': currentSubMenu === 'doc'}"
            data-menu="doc"
            @mouseenter.self="showSubmenu"
            @mouseleave="hideSubmenu"
          >
            文档<svg-icon name="arrow-down" width="10" height="10" />
          </div> -->
          <!-- <div
            class="header__navigation__item"
            :class="{'actived': currentPage === 'service'}"
          >
            <NuxtLink to="/service">支持与服务</NuxtLink>
          </div> -->
          <div class="header__navigation__item"><a href="http://console.vcn.ctyun.cn/vss" target="_blank">控制台</a></div>
          <!-- <div class="header__navigation__item"><svg-icon class="header__navigation__item__search" name="search" /></div> -->
        </div>
      </div>
    </div>
    <div ref="submenu" class="header__submenu" @mouseenter.self="showSubmenu" @mouseleave="hideSubmenu">
      <ul v-if="currentSubMenu === 'prod'">
        <li>视频监控</li>
        <li>实时音视频</li>
      </ul>
      <ul v-if="currentSubMenu === 'solution'">
        <li @click="goto('/solutions','city')">智慧城市</li>
        <li @click="goto('/solutions','education')">智慧教育</li>
        <li @click="goto('/solutions','community')">智慧社区</li>
        <li @click="goto('/solutions','site')">智慧工地</li>
        <li @click="goto('/solutions','retail')">智慧零售</li>
        <li @click="goto('/solutions','logistics')">智慧物流</li>
      </ul>
      <ul v-if="currentSubMenu === 'developer'">
        <li @click="goto('/developer')">API Explorer</li>
        <li><a href="/document/api/" target="_blank">API文档</a></li>
        <li @click="goto('/developer')">SDK文档</li>
      </ul>
      <ul v-if="currentSubMenu === 'doc'">
        <li>产品介绍</li>
        <li>操作手册</li>
      </ul>
    </div>
    <div ref="panel" class="header__panel" @mouseenter.self="showPanel" @mouseleave="hidePanel">
      <div class="header__panel__container">
        <div class="header__panel__navigation">
          <div class="header__panel__navigation__item">人脸人体</div>
          <div class="header__panel__navigation__item">视觉搜索</div>
          <div class="header__panel__navigation__item">目标检测</div>
        </div>
        <div class="header__panel__body">
          <div class="header__panel__col">
            <dl class="header__panel__item">
              <dt>人脸属性</dt>
              <dd @click="goto('/ai')">人脸属性识别</dd>
              <dd @click="goto('/ai')">人脸口罩检测</dd>
              <dd @click="goto('/ai')">口罩人脸比对</dd>
              <dd @click="goto('/ai')">表情识别</dd>
            </dl>
            <dl class="header__panel__item">
              <dt @click="goto('/ai')">人脸对比</dt>
              <dd @click="goto('/ai')">人脸搜索1:N</dd>
              <dd @click="goto('/ai')">人脸对比1:1</dd>
            </dl>
          </div>
          <div class="header__panel__col">
            <dl class="header__panel__item">
              <dt @click="goto('/ai')">活体检测</dt>
              <dd @click="goto('/ai')">视频活体检测</dd>
              <dd @click="goto('/ai')">人脸活体检测</dd>
            </dl>
            <dl class="header__panel__item">
              <dt @click="goto('/ai')">人脸检测</dt>
              <dd @click="goto('/ai')">人脸检测定位</dd>
              <dd @click="goto('/ai')">公众人脸识别</dd>
              <dd @click="goto('/ai')">厨师帽佩戴识别</dd>
            </dl>
          </div>
          <div class="header__panel__col">
            <dl class="header__panel__item">
              <dt @click="goto('/ai')">人体识别</dt>
              <dd @click="goto('/ai')">人流热度图估计</dd>
              <dd @click="goto('/ai')">动作行为识别</dd>
              <dd @click="goto('/ai')">手姿势关键点</dd>
              <dd @click="goto('/ai')">人体姿势关键点</dd>
              <dd @click="goto('/ai')">人体计数</dd>
              <dd @click="goto('/ai')">人体检测</dd>
              <dd @click="goto('/ai')">人体结构属性</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      panelTimeout: null,
      submenuTimeout: null,
      currentSubMenu: null,
      currentPanel: null
    }
  },
  computed: {
    currentPage() {
      return this.$route.name
    }
  },
  methods: {
    showPanel() {
      clearTimeout(this.panelTimeout)
      const $target = event.target
      if ($target.dataset.menu) {
        this.currentPanel = $target.dataset.menu
      }
      this.$refs.panel.style.display = 'block'
    },
    hidePanel() {
      this.panelTimeout = setTimeout(() => {
        this.$refs.panel.style.display = 'none'
        this.currentPanel = null
      }, 200)
    },
    showSubmenu(event) {
      clearTimeout(this.submenuTimeout)
      const $submenu = this.$refs.submenu
      const $target = event.target
      $submenu.style.display = 'block'
      if (~$target.className.indexOf('header__navigation__item')) {
        const x = $target.offsetLeft - 20
        $submenu.style.left = `${x}px`
      }
      if ($target.dataset.menu) {
        this.currentSubMenu = $target.dataset.menu
      }
    },
    hideSubmenu() {
      this.submenuTimeout = setTimeout(() => {
        this.$refs.submenu.style.display = 'none'
        this.currentSubMenu = null
      }, 200)
    },
    goto(pageName, info='') {
      this.$router.push({
        path: pageName,
        query: { info }
      })
      this.hidePanel()
      this.hideSubmenu()
    }
  }
})
</script>

<style lang="scss" scoped>
  .header {
    background: #fff;
    a {
      color: $text;
      &:hover {
        color: $primary;
      }
    }
    &__container {
      @include container;
      height: 60px;
      display: flex;
      align-items: stretch;
    }
    &__left {
      display: flex;
      align-items: center;
    }
    &__right {
      flex: 1;
    }
    &__logo {
      width: 130px;
      border-right: 1px solid $textGrey;
      margin-right: 20px;
      padding-right: 20px;
    }
    &__title {
      color: $text;
      font-size: 16px;
    }
    &__navigation {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: stretch;
      &__item {
        color: $text;
        font-size: 16px;
        margin-right: 40px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .svg-icon {
          color: #B7B7B7;
          vertical-align: baseline;
          margin-left: 5px;
          transition: transform 100ms;
        }
        &__search.svg-icon {
          vertical-align: middle;
        }
        &:hover {
          color: $primary;
        }
        &.sub {
          cursor: default;
        }
        &.hovered {
          color: $primary;
          .svg-icon {
            color: $primary;
            transform: rotate(180deg);
          }
        }
        &.actived {
          color: $primary;
          a {
            color: $primary;
          }
        }
      }
    }

    &__panel {
      display: none;
      position: absolute;
      top: 60px;
      background: #23232c;
      width: 100%;
      animation-duration: 100ms;
      animation-name: slideInDown;
      &__container {
        @include container;
        padding: 0 100px;
        color: $text;
        display: flex;
      }
      &__navigation {
        width: 200px;
        &__item {
          font-size: 16px;
          padding: 10px 0 10px 50px;

          &:hover {
            background: $darkBg;
          }
        }
      }
      &__body {
        flex: 1;
        display: flex;
        padding: 10px 40px 10px 40px;
        background: $darkBg;
      }
      &__col {
        flex: 1;
      }
      &__item {
        margin-bottom: 30px;
        dt {
          color: $textGrey;
          font-weight: bold;
        }
        dd {
          margin-top: 8px;
          cursor: pointer;
          &:hover {
            color: $primary;
          }
        }
      }
    }

    &__submenu {
      position: absolute;
      top: 60px;
      background: #fff;
      width: 100px;
      animation-duration: 100ms;
      animation-name: slideInDown;

      ul {
        margin: 0;
        padding: 10px 20px;
        list-style: none;
        color: $text;
      }
      li {
        padding: 5px 0;
        cursor: pointer;
        &:hover {
          color: $primary;
        }
        a {
          display: block;
        }
      }
    }
  }
</style>
