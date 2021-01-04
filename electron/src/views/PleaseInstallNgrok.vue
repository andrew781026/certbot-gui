<template>
  <div>
    <h1>下載 Ngrok</h1>
    <a>https://github.com/andrew781026/certbot-gui/releases/download/v0.0.1-alpha/ngrok.exe</a>
    <br>
    <el-button type="primary" @click="install">安裝 Ngrok</el-button>
    <el-button type="warning" @click="toCheckCertbotPage">使用 Certbot</el-button>
  </div>
</template>

<script>
import {downloadNgrok} from "@/ipcRenderer/ngrok";

export default {
  name: "PleaseInstallNgrok",
  mounted() {

    // register getData
  },
  methods: {

    install() {

      downloadNgrok()
          .then(
              () => this.$router.push({name: 'NgrokControl'}),
              console.error
          )
    },

    toCheckCertbotPage() {

      this.$router.push({name: 'CheckCertbot'});
    }
  }
}
</script>

<style scoped>

</style>