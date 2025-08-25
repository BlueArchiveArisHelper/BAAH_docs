<template>
  <div v-if="shouldShowNotice" class="custom-block warning">
    <p class="custom-block-title">
      {{ currentLanguageConfig.noticeTitle }}
    </p>
    <p>
      {{ currentLanguageConfig.noticeText }}
      <a :href="sourceDocLink" target="_blank" rel="noopener noreferrer">{{ currentLanguageConfig.linkText }}</a>
      {{ currentLanguageConfig.noticeAfterLink }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TranslationNotice',
  data() {
    return {
      // 语言配置，可以添加更多语言
      languageConfigs: {
        'zh_CN': {
          isSource: true, // 标记是否为源语言，源语言不显示提示
          noticeTitle: '原文档提示',
          noticeText: '',
          linkText: '',
          noticeAfterLink: ''
        },
        'en_US': {
          isSource: false,
          noticeTitle: 'AI Translation Notice',
          noticeText: 'This document is automatically translated by AI. If you can read Chinese, we recommend checking the ',
          linkText: 'original Chinese documentation',
          noticeAfterLink: ' for more accurate information.'
        }
      }
    };
  },
  computed: {
    // 获取当前路径
    currentPath() {
      return typeof window !== 'undefined' ? window.location.pathname : '';
    },
    // 检测当前语言
    currentLanguage() {
      // 查找路径中匹配的语言代码
      for (const lang in this.languageConfigs) {
        if (this.currentPath.includes(`/${lang}/`)) {
          return lang;
        }
      }
      // 默认返回英文
      return 'en_US';
    },
    // 获取当前语言配置
    currentLanguageConfig() {
      return this.languageConfigs[this.currentLanguage] || this.languageConfigs['en_US'];
    },
    // 判断是否应该显示提示（非源语言才显示）
    shouldShowNotice() {
      return !this.currentLanguageConfig.isSource;
    },
    // 生成源文档链接（中文）
    sourceDocLink() {
      // 将当前路径中的语言代码替换为源语言代码（zh_CN）
      let sourcePath = this.currentPath;
      
      // 遍历所有非源语言，替换路径中的语言代码
      for (const lang in this.languageConfigs) {
        if (lang !== 'zh_CN' && sourcePath.includes(`/${lang}/`)) {
          sourcePath = sourcePath.replace(`/${lang}/`, '/zh_CN/');
          break;
        }
      }
      
      return sourcePath;
    }
  }
};
</script>
