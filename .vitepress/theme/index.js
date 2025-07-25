import { defineAsyncComponent } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { LiteTree } from '@lite-tree/vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DownloadLink', defineAsyncComponent(() => import('./components/DownloadLink.vue')));
    enhanceAppWithTabs(app)
    app.component('LiteTree', LiteTree)
  }
};
