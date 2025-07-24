import { defineAsyncComponent } from 'vue';
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DownloadLink', defineAsyncComponent(() => import('./components/DownloadLink.vue')));
  }
};
