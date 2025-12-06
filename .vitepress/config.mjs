import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { zhConfig } from './config/zh_CN'
import { enConfig } from './config/en_US'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        whitespace: 'preserve'
      }
    }
  },
  title: "BAAH",
  lang: 'zh-CN',
  outDir: "dist",
  srcDir: "src",
  description: "一个由开源社区驱动的BlueArchive自动化脚本",
  locales: {
    zh_CN: {
      label: "简体中文",
      lang: "zh_CN",
      link: "/zh_CN",
      ...zhConfig
    },
    en_US: {
      label: "English",
      lang: "en_US",
      link: "/en_US",
      ...enConfig
    }
  },
  head: [
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/img/website/icon-180x180.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/website/icon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/img/website/icon-16x16.png" }],
    ["link", { rel: "shortcut icon", href: "/img/website/icon-16x16.ico" }],
  ],
  themeConfig: {
    logo: '/img/website/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],

    sidebar: [
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