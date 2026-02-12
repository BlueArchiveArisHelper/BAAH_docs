<template>
  <iframe
    ref="afdianIframe"
    src="https://afdian.com/leaflet?slug=sanmusen214"
    :width="iframeWidth"
    height="200"
    scrolling="no"
    frameborder="0"
  ></iframe>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const afdianIframe = ref(null)
const iframeWidth = ref('100%')

const updateWidth = () => {
  iframeWidth.value = document.body.clientWidth < 700 ? '100%' : '640'
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<style scoped>
iframe {
  display: block;
  margin: 0 auto;
}
</style>
