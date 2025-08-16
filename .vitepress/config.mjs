import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        whitespace: 'preserve'
      }
    }
  },
  vite: {
    server: {
      allowedHosts: ['test-baah.blockhaity.dpdns.org']
    }
  },
  title: "BAAH",
  lang: 'zh-CN',
  outDir: "dist",
  srcDir: "src",
  description: "一个由开源社区驱动的BlueArchive自动化脚本",
  head: [
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/img/website/icon-180x180.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/website/icon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/img/website/icon-16x16.png" }],
    ["link", {rel: "shortcut icon", href: "/img/website/icon-16x16.ico" }],
  ],
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
          { 
            text: '功能介绍',
            collapsed: true,
            items: [
              { text: '刷取关卡', link: '/docs/sweep-level.md' },
              { text: '课程表', link: '/docs/lesson.md' },
              { text: '商店', link: '/docs/shop.md' },
            ]
          },
          { text: 'Q&A 常见问题', link: '/docs/QA' },
        ]
      },
      {
        text: '开发文档', items: [
          { text: '环境搭建', link: '/docs/dev-env' },
          { text: '文件结构', link: '/docs/file-structure' },
          { text: '关键类说明', link: '/docs/key-classes' },
          { text: '开发规范', link: '/docs/dev-spec' },
          { text: '任务开发步骤', link: '/docs/task-dev' },
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
  markdown: {
    image: {
      lazyLoading: true
    },
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})