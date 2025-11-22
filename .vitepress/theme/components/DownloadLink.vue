<template>
  <div>
    <div>
      当前最新版本：<span>{{ version }}</span>
    </div>

    <details class="details custom-block">
      <summary>发布内容</summary>
      <div v-html="releaseBody"></div>
    </details>

    <div>
      <div v-if="platform === 'windows'">
        <a href="https://pan.quark.cn/s/319faf23496c" class="VPButton medium brand">夸克网盘下载</a>
        <a href="https://mirrorchyan.com/zh/projects?rid=BAAH" class="VPButton medium alt">Mirror酱下载</a>
        <a href="https://github.com/BlueArchiveArisHelper/BAAH/releases" class="VPButton medium alt">GitHub Release</a>
      </div>

      <div v-else-if="platform === 'mac'">
        <a href="/zh_CN/docs/manual/source-code.md" class="VPButton medium brand">查看源码部署教程</a>
      </div>

      <div v-else-if="platform === 'linux'">
        <p>你的操作系统为Linux,可以使用下列部署方法</p>
        <div>
          <a href="/zh_CN/docs/manual/quick-start" class="VPButton medium brand">Docker部署</a>
          <a href="/zh_CN/docs/manual/source-code" class="VPButton medium alt">查看源码部署教程</a>
        </div>
      </div>

      <div v-else-if="platform === 'android'">
        <a href="https://bas.blockhaity.qzz.io?target=/2025/02/10/BAAH%E5%9C%A8%E9%80%86%E5%A4%A9%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E8%BF%90%E8%A1%8C/"
          class="VPButton medium brand">查看Android部署教程</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReleaseInfo',
  data() {
    return {
      version: '加载中...',
      releaseBody: '加载中...',
      platform: '',
      error: null
    }
  },
  created() {
    this.detectPlatform()
    this.fetchReleaseInfo()
  },
  methods: {
    detectPlatform() {
      const platform = navigator.platform.toLowerCase()
      if (platform.includes('win')) {
        this.platform = 'windows'
      } else if (platform.includes('mac')) {
        this.platform = 'mac'
      } else if (platform.includes('linux')) {
        this.platform = 'linux'
      } else if (platform.includes('android')) {
        this.platform = 'android'
      }
    },
    async fetchReleaseInfo() {
      try {
        const response = await fetch('https://api.github.com/repos/BlueArchiveArisHelper/BAAH/releases/latest')
        const data = await response.json()
        this.version = data.tag_name
        this.releaseBody = data.body.replace(/\n/g, '<br>')
      } catch (error) {
        console.error('获取版本信息失败:', error)
        this.version = '获取失败'
        this.releaseBody = '获取失败'
      }
    }
  }
}
</script>
