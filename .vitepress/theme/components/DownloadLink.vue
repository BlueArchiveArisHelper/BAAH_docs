<template>
  <div>
    <div>
      {{ texts.currentVersion }}<span>{{ version }}</span>
    </div>

    <details class="details custom-block">
      <summary>{{ texts.releaseContent }}</summary>
      <div v-html="releaseBody"></div>
    </details>

    <div>
      <div v-if="platform === 'windows'">
        <a href="https://github.com/BlueArchiveArisHelper/BAAH/releases" class="VPButton medium brand">{{
          texts.githubRelease }}</a>
        <a href="https://pan.quark.cn/s/319faf23496c" class="VPButton medium alt">{{ texts.quarkDownload }}</a>
        <a href="https://mirrorchyan.com/zh/projects?rid=BAAH" class="VPButton medium alt">{{ texts.mirrorChyanDownload
        }}</a>
        <a href="https://api.blockhaity.qzz.io/docs/#/api-doc/getbaah" class="VPButton medium alt">{{
          texts.blockhaityapi }}</a>
      </div>

      <div v-else-if="platform === 'mac'">
        <a :href="texts.sourceCodePath" class="VPButton medium brand">{{ texts.viewSourceTutorial }}</a>
      </div>

      <div v-else-if="platform === 'linux'">
        <a :href="texts.dockerPath" class="VPButton medium brand">{{ texts.dockerDeploy }}</a>
        <a :href="texts.sourceCodePath" class="VPButton medium alt">{{ texts.viewSourceTutorial }}</a>
      </div>

      <div v-else-if="platform === 'android'">
        <a :href="texts.androidPath" class="VPButton medium brand">{{ texts.androidDeployTutorial }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReleaseInfo',
  data() {
    return {
      version: 'Loading...',
      releaseBody: 'Loading...',
      platform: '',
      error: null,
      lang: 'en',
      texts: {}
    }
  },
  created() {
    this.detectLanguage()
    this.detectPlatform()
    this.fetchReleaseInfo()
  },
  methods: {
    detectLanguage() {
      const urlPath = window.location.pathname
      const browserLang = navigator.language.toLowerCase()
      const textDict = {
        zh: {
          currentVersion: '当前最新版本：',
          releaseContent: '发布内容',
          quarkDownload: '夸克网盘下载',
          mirrorChyanDownload: 'Mirror酱下载（需要CDK）',
          githubDirectDownload: 'GitHub直链下载',
          githubRelease: 'GitHub Release',
          viewSourceTutorial: '查看源码部署教程',
          dockerDeploy: 'Docker部署',
          androidDeployTutorial: '查看Android部署教程',
          loading: '加载中...',
          fetchFailed: '获取失败',
          blockhaityapi: "BlockHaity's API",
          sourceCodePath: '/zh_CN/docs/manual/source-code',
          dockerPath: '/zh_CN/docs/manual/quick-start',
          androidPath: 'https://bas.blockhaity.qzz.io?target=/2025/02/10/BAAH%E5%9C%A8%E9%80%86%E5%A4%A9%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E8%BF%90%E8%A1%8C/'
        },
        en: {
          currentVersion: 'Current Latest Version: ',
          releaseContent: 'Release Content',
          quarkDownload: 'Quark Cloud Download',
          mirrorChyanDownload: 'MirrorChyan Download (CDK Required)',
          githubDirectDownload: 'GitHub Direct Download',
          githubRelease: 'GitHub Release',
          viewSourceTutorial: 'View Source Deployment Tutorial',
          linuxDeployMessage: 'Your OS is Linux, you can use the following deployment methods',
          dockerDeploy: 'Docker Deployment',
          androidDeployTutorial: 'View Android Deployment Tutorial (Only Chinese)',
          loading: 'Loading...',
          fetchFailed: 'Failed to fetch',
          blockhaityapi: "BlockHaity's API",
          sourceCodePath: '/en_US/docs/manual/source-code',
          dockerPath: '/en_US/docs/manual/quick-start',
          androidPath: 'https://bas.blockhaity.qzz.io?target=/2025/02/10/BAAH%E5%9C%A8%E9%80%86%E5%A4%A9%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E8%BF%90%E8%A1%8C/'
        }
      }

      // 首先检查URL路径中的语言
      if (urlPath.includes('/zh_CN/')) {
        this.lang = 'zh'
      } else if (urlPath.includes('/en_US/')) {
        this.lang = 'en'
      } else {
        // 如果URL中没有语言信息，则使用浏览器语言
        if (browserLang.includes('zh')) {
          this.lang = 'zh'
        } else {
          this.lang = 'en'
        }
      }
      this.texts = textDict[this.lang]
      this.version = this.texts.loading
      this.releaseBody = this.texts.loading
    },
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
        this.releaseBody = data.body
          .replace(/\n/g, '<br>') // 统一换行符
          .replace(/#{1,2}\s*Fix/g, '<span style="color: #e74c3c; font-weight: bold;">Fix</span>')
          .replace(/#{1,2}\s*Feat/g, '<span style="color: #2ecc71; font-weight: bold;">Feat</span>')
          .replace(/#{1,2}\s*Update/g, '<span style="color: #3498db; font-weight: bold;">Update</span>')
      } catch (error) {
        console.error('Failed to fetch release info:', error)
        this.version = this.texts.fetchFailed
        this.releaseBody = this.texts.fetchFailed
      }
    }
  }
}
</script>
