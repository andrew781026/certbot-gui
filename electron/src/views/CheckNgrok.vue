<template>
  <div class="flex-center flex-col">
    <h1 class="text-4xl">確認 Ngrok.exe 是否已安裝</h1>
    <img :src="require('@/assets/loading.svg')" alt="loading">
  </div>
</template>

<script>
import {checkNgrokExistence} from "@/ipcRenderer/ngrok";

export default {
  name: "CheckNgrok",
  mounted() {

    checkNgrokExistence()
        .then(
            () => this.$router.push({name: 'NgrokControl'}),
            () => this.$router.push({name: 'PleaseInstallNgrok'})
        )
  },
}
</script>

<style scoped>
</style>