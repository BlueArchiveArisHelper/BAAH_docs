import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BAAH",
  lang: 'zh-CN',
  outDir: "dist",
  srcDir: "src",
  description: "一个由开源社区驱动的BlueArchive自动化脚本",
  themeConfig: {
    logo: '/img/website/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/download' }
    ],

    sidebar: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/download' },
      {
        text: '使用文档', items: [
          { text: '快速开始', link: '/docs/quick-start' },
          { text: '从源码部署', link: '/docs/source-code' },
          { text: 'Q&A 常见问题', link: '/docs/QA' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlueArchiveArisHelper/BAAH' }
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: [2, 3],
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "short", // medium
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    search: {
      provider: 'local'
    }
  },
})