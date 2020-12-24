<template>
  <div>
    <h1>確認 Certbot 是否已安裝</h1>
    <img :src="require('@/assets/loading.svg')" alt="loading">
  </div>
</template>

<script>
export default {
  name: "CheckCertbot",
  methods: {

    isCertbotInstalled() {

      // ipcMain cannot return error object , so we need to custom our own error
      /*
      window.ipcRenderer.invoke('andrew:isCertbotInstalled')
          .then(isInstalled => {

            
          })
       */
    }
  }
}
</script>

<style scoped>

</style>