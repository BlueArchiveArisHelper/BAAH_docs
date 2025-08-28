<template>
  <div class="language-redirect">
    <div v-if="showLanguageSelector" class="language-selector">
      <p>{{ promptMessage }}</p>
      <div class="language-options">
        <button 
          v-for="lang in supportedLanguages" 
          :key="lang.code"
          @click="redirectToLanguage(lang.code)"
          class="language-button"
        >
          {{ lang.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'

export default {
  name: 'LanguageRedirect',
  setup() {
    const router = useRouter()
    const showLanguageSelector = ref(false)
    const promptMessage = ref('')
    
    // 网站支持的语言配置
    const supportedLanguages = ref([
      { code: 'en', name: 'English', path: '/en_US/' },
      { code: 'zh', name: '中文', path: '/zh_CN/' },
    ])
    
    // 获取浏览器首选语言
    const getBrowserLanguage = () => {
      if (typeof navigator === 'undefined') return null
      
      return (
        navigator.language ||
        navigator.userLanguage ||
        navigator.browserLanguage ||
        navigator.systemLanguage ||
        'en'
      ).toLowerCase()
    }
    
    // 跳转到指定语言版本
    const redirectToLanguage = (languageCode) => {
      const targetLang = supportedLanguages.value.find(lang => lang.code === languageCode)
      if (targetLang) {
        // 使用VitePress的路由进行跳转
        router.go(targetLang.path)
      }
    }
    
    onMounted(() => {
      // 延迟执行以确保DOM已完全渲染
      setTimeout(() => {
        const browserLang = getBrowserLanguage()
        
        if (!browserLang) {
          showLanguageSelector.value = true
          promptMessage.value = 'Please select your preferred language:'
          return
        }
        
        // 检查完整匹配 (如 zh-CN)
        let matchedLang = supportedLanguages.value.find(lang => 
          browserLang.startsWith(lang.code)
        )
        
        // 如果没有完整匹配，检查主要语言部分 (如 zh-CN 中的 zh)
        if (!matchedLang) {
          const primaryLang = browserLang.split('-')[0]
          matchedLang = supportedLanguages.value.find(lang => 
            lang.code === primaryLang
          )
        }
        
        // 如果找到匹配的语言，进行跳转
        if (matchedLang) {
          redirectToLanguage(matchedLang.code)
        } else {
          // 没有匹配语言，显示选择器
          showLanguageSelector.value = true
          promptMessage.value = `We detected your language as ${browserLang}. Please select your preferred language:`
        }
      }, 500)
    })
    
    return {
      showLanguageSelector,
      promptMessage,
      supportedLanguages,
      redirectToLanguage
    }
  }
}
</script>

<style scoped>
.language-selector {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.language-selector p {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.language-options {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.language-button {
  padding: 0.8rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.language-button:hover {
  background-color: var(--vp-c-brand-light);
}
</style>