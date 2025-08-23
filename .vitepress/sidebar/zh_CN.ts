import { DefaultTheme } from 'vitepress'
export const zhSidebar: DefaultTheme.Sidebar = {
    '/': [
        { text: '主页', link: '/zh_CN' },
        { text: '下载', link: '/zh_CN/download' },
        {
            text: '使用文档', items: [
                { text: '快速开始', link: '/zh_CN/docs/quick-start' },
                { text: '从源码部署', link: '/zh_CN/docs/source-code' },
                {
                    text: '功能介绍',
                    collapsed: true,
                    items: [
                        { text: '刷取关卡', link: '/zh_CN/docs/sweep-level' },
                        { text: '课程表', link: '/zh_CN/docs/lesson' },
                        { text: '商店', link: '/zh_CN/docs/shop' },
                        { text: '咖啡馆', link: '/zh_CN/docs/cafe' },
                        { text: '总力战', link: '/zh_CN/docs/assault' },
                        { text: '推图', link: '/zh_CN/docs/explore-stage' },
                        { text: '小工具', link: '/zh_CN/docs/tools' },
                        { text: '通知', link: '/zh_CN/docs/notification' },
                    ]
                },
                { text: '自动化运行', link: '/zh_CN/docs/automated-operation' },
                { text: '获取支持', link: '/zh_CN/docs/get-support' },
                { text: 'Q&A 常见问题', link: '/zh_CN/docs/QA' },
            ]
        },
        {
            text: '开发文档', items: [
                { text: '环境搭建', link: '/zh_CN/docs/dev-env' },
                { text: '文件结构', link: '/zh_CN/docs/file-structure' },
                { text: '关键类说明', link: '/zh_CN/docs/key-classes' },
                { text: '开发规范', link: '/zh_CN/docs/dev-spec' },
                { text: '任务开发步骤', link: '/zh_CN/docs/task-dev' },
            ]
        }
    ]
}