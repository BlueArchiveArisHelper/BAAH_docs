import { DefaultTheme } from 'vitepress'
export const zhSidebar: DefaultTheme.Sidebar = {
    '/zh_CN/': [
        { text: '主页', link: '/zh_CN' },
        { text: '下载', link: '/zh_CN/download' },
        {
            text: '使用文档', items: [
                { text: '快速开始', link: '/zh_CN/docs/manual/quick-start' },
                { text: '从源码部署', link: '/zh_CN/docs/manual/source-code' },
                {
                    text: '功能介绍',
                    collapsed: true,
                    items: [
                        { text: '刷取关卡', link: '/zh_CN/docs/manual/introduction/sweep-level' },
                        { text: '课程表', link: '/zh_CN/docs/manual/introduction/lesson' },
                        { text: '商店', link: '/zh_CN/docs/manual/introduction/shop' },
                        { text: '咖啡馆', link: '/zh_CN/docs/manual/introduction/cafe' },
                        { text: '总力战', link: '/zh_CN/docs/manual/introduction/assault' },
                        { text: '推图', link: '/zh_CN/docs/manual/introduction/explore-stage' },
                        { text: '小工具', link: '/zh_CN/docs/manual/introduction/tools' },
                        { text: '通知', link: '/zh_CN/docs/manual/introduction/notification' },
                    ]
                },
                { text: '自动化运行', link: '/zh_CN/docs/manual/automated-operation' },
                { text: '获取支持', link: '/zh_CN/docs/manual/get-support' },
                { text: 'Q&A 常见问题', link: '/zh_CN/docs/manual/QA' },
            ]
        },
        {
            text: '开发文档', items: [
                { text: '环境搭建', link: '/zh_CN/docs/dev/dev-env' },
                { text: '文件结构', link: '/zh_CN/docs/dev/file-structure' },
                { text: '关键类说明', link: '/zh_CN/docs/dev/key-classes' },
                { text: '开发规范', link: '/zh_CN/docs/dev/dev-spec' },
                { text: '任务开发步骤', link: '/zh_CN/docs/dev/task-dev' },
            ]
        }
    ]
}