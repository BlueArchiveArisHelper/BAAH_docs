import { DefaultTheme } from 'vitepress'
export const enSidebar: DefaultTheme.Sidebar = {
    '/en_US/': [
        { text: 'Home Page', link: '/en_US' },
        { text: 'Download', link: '/en_US/download' },
        {
            text: 'Use documentation', items: [
                { text: 'Get started quickly', link: '/en_US/docs/quick-start' },
                { text: 'Deploy from source', link: '/en_US/docs/source-code' },
                {
                    text: 'Function introduction',
                    collapsed: true,
                    items: [
                        { text: 'Brush the level', link: '/en_US/docs/sweep-level' },
                        { text: 'Lesson', link: '/en_US/docs/lesson' },
                        { text: 'Store', link: '/en_US/docs/shop' },
                        { text: 'Cafe', link: '/en_US/docs/cafe' },
                        { text: 'Assault', link: '/en_US/docs/assault' },
                        { text: 'Explore Stage', link: '/en_US/docs/explore-stage' },
                        { text: 'Tools', link: '/en_US/docs/tools' },
                        { text: 'Notification', link: '/en_US/docs/notification' },
                    ]
                },
                { text: 'Automated Operation', link: '/en_US/docs/automated-operation' },
                { text: 'Get Support', link: '/en_US/docs/get-support' },
                { text: 'Q&A', link: '/en_US/docs/QA' },
            ]
        },
        {
            text: 'Development documentation', items: [
                { text: 'Environment construction', link: '/en_US/docs/dev-env' },
                { text: 'File structure', link: '/en_US/docs/file-structure' },
                { text: 'Key class descriptions', link: '/en_US/docs/key-classes' },
                { text: 'Development specifications', link: '/en_US/docs/dev-spec' },
                { text: 'Task development steps', link: '/en_US/docs/task-dev' },
            ]
        }
    ]
}