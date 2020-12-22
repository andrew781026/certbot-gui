<template>
  <div>確認 Certbot 是否已安裝</div>
</template>

<script>
export default {
  name: "CheckCertbot",
  methods: {

    isCertbotInstalled() {

      // ipcMain cannot return error object , so we need to custom our own error
      window.ipcRenderer.invoke('andrew:isCertbotInstalled')
          .then(isInstalled => {

            
          })
    }
  }
}
</script>

<style scoped>

</style>