import { DefaultTheme } from 'vitepress'
export const enSidebar: DefaultTheme.Sidebar = {
    '/en_US/': [
        { text: 'Home Page', link: '/en_US' },
        { text: 'Download', link: '/en_US/download' },
        {
            text: 'Use documentation', items: [
                { text: 'Get started quickly', link: '/en_US/docs/manual/quick-start' },
                { text: 'Deploy from source', link: '/en_US/docs/manual/source-code' },
                {
                    text: 'Function introduction',
                    collapsed: true,
                    items: [
                        { text: 'Level Sweeping', link: '/en_US/docs/manual/introduction/sweep-level' },
                        { text: 'Schedule', link: '/en_US/docs/manual/introduction/lesson' },
                        { text: 'Shop', link: '/en_US/docs/manual/introduction/shop' },
                        { text: 'Cafe', link: '/en_US/docs/manual/introduction/cafe' },
                        { text: 'Assault', link: '/en_US/docs/manual/introduction/assault' },
                        { text: 'Explore Stage', link: '/en_US/docs/manual/introduction/explore-stage' },
                        { text: 'Tools', link: '/en_US/docs/manual/introduction/tools' },
                        { text: 'Notifications', link: '/en_US/docs/manual/introduction/notification' },
                    ]
                },
                { text: 'Automated Operation', link: '/en_US/docs/manual/automated-operation' },
                { text: 'Get Support', link: '/en_US/docs/manual/get-support' },
                { text: 'Q&A', link: '/en_US/docs/manual/QA' },
            ]
        },
        {
            text: 'Development Documentation', items: [
                { text: 'Environment Setup', link: '/en_US/docs/dev/dev-env' },
                { text: 'File Structure', link: '/en_US/docs/dev/file-structure' },
                { text: 'Key Classes', link: '/en_US/docs/dev/key-classes' },
                { text: 'Development Standards', link: '/en_US/docs/dev/dev-spec' },
                { text: 'Task Development Steps', link: '/en_US/docs/dev/task-dev' },
            ]
        }
    ]
}
