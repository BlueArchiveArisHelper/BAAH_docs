import { defineAsyncComponent } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { LiteTree } from '@lite-tree/vue'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './global.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DownloadLink', defineAsyncComponent(() => import('./components/DownloadLink.vue')));
    app.component('LanguageRedirect', defineAsyncComponent(() => import('./components/LanguageRedirect.vue')));
    app.component('LanguageWarn', defineAsyncComponent(() => import('./components/LanguageWarn.vue')));
    enhanceAppWithTabs(app)
    app.component('LiteTree', LiteTree)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      //mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    };
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
};
