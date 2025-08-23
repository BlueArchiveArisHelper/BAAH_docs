import { DefaultTheme } from 'vitepress'
export const enSidebar: DefaultTheme.Sidebar = {
    '/': [
        { text: 'Home Page', link: '/zh_CN' },
        { text: 'Download', link: '/zh_CN/download' },
        {
            text: 'Use documentation', items: [
                { text: 'Get started quickly', link: '/zh_CN/docs/quick-start' },
                { text: 'Deploy from source', link: '/zh_CN/docs/source-code' },
                {
                    text: 'Function introduction',
                    collapsed: true,
                    items: [
                        { text: 'Brush the level', link: '/zh_CN/docs/sweep-level' },
                        { text: 'Lesson', link: '/zh_CN/docs/lesson' },
                        { text: 'Store', link: '/zh_CN/docs/shop' },
                        { text: 'Cafe', link: '/zh_CN/docs/cafe' },
                        { text: 'Assault', link: '/zh_CN/docs/assault' },
                        { text: 'Explore Stage', link: '/zh_CN/docs/explore-stage' },
                        { text: 'Tools', link: '/zh_CN/docs/tools' },
                        { text: 'Notification', link: '/zh_CN/docs/notification' },
                    ]
                },
                { text: 'Automated Operation', link: '/zh_CN/docs/automated-operation' },
                { text: 'Get Support', link: '/zh_CN/docs/get-support' },
                { text: 'Q&A', link: '/zh_CN/docs/QA' },
            ]
        },
        {
            text: 'Development documentation', items: [
                { text: 'Environment construction', link: '/zh_CN/docs/dev-env' },
                { text: 'File structure', link: '/zh_CN/docs/file-structure' },
                { text: 'Key class descriptions', link: '/zh_CN/docs/key-classes' },
                { text: 'Development specifications', link: '/zh_CN/docs/dev-spec' },
                { text: 'Task development steps', link: '/zh_CN/docs/task-dev' },
            ]
        }
    ]
}