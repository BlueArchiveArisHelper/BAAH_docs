import { enNav } from '../navbar'
import { enSidebar } from '../sidebar'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: { // 主题设置
    lastUpdatedText: 'Last updated', // 上次更新显示文本
    returnToTopLabel: 'Back to top', // 更改手机端菜单文字显示
    search: {
      provider: 'local',
      options: {
        locales: {
          en_US: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                displayDetails: 'Displays a detailed list',
                resetButtonTitle: 'Reworked search',
                backButtonTitle: 'Close search',
                noResultsText: 'No relevant results found',
                footer: {
                  selectText: 'choose',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'handoff',
                  navigateUpKeyAriaLabel: 'Up arrow key',
                  navigateDownKeyAriaLabel: 'Down arrow key',
                  closeText: 'Shut down',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    nav: enNav,
    sidebar: enSidebar, // 侧边栏
    docFooter: { // 自定义上下页名
      prev: 'Previous', next: 'Next'
    },
    darkModeSwitchLabel: '深浅模式', // 手机端深浅模式文字修改
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
      label: 'directory'
    },
    //大纲顶部标题
    outlineTitle: 'Current page outline',
  }
}