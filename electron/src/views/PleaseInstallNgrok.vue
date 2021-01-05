<template>
  <div>
    <h1>下載 Ngrok</h1>
    <a href="https://github.com/andrew781026/certbot-gui/releases/download/v0.0.1-alpha/ngrok.exe">
      https://github.com/andrew781026/certbot-gui/releases/download/v0.0.1-alpha/ngrok.exe
    </a>
    <br>
    <el-button type="primary" @click="install">安裝 Ngrok</el-button>
    <el-button type="warning" @click="toCheckCertbotPage">使用 Certbot</el-button>
    <el-progress type="circle" :percentage="percentage"></el-progress>
  </div>
</template>

<script>
import {downloadNgrok, gotDataListener} from "@/ipcRenderer/ngrok";

export default {
  name: "PleaseInstallNgrok",
  mounted() {

    // register getData
    gotDataListener(({downloadedLength, totalLength}) => {

      this.percentage = Math.floor(downloadedLength * 100 / totalLength);
    })
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
  },
  data() {

    return {
      percentage: 0
    }
  }
}
</script>

<style scoped>

</style>