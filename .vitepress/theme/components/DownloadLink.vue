<template>
  <div>
    <a :href="downloadUrl" target="_blank">镜像 | Mirror</a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      downloadUrl: ''
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://baah.02000721.xyz/releases');
      const data = response.data;
      this.downloadUrl = data['assets'][0]['browser_download_url'].replace('https://github.com/BlueArchiveArisHelper/BAAH/releases/', 'https://baah.02000721.xyz/');
    } catch (error) {
      console.error('Error fetching download link:', error);
    }
  }
};
</script>
