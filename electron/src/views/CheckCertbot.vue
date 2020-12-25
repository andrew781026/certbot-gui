<template>
  <div>
    <h1>確認 Certbot 是否已安裝</h1>
    <img :src="require('@/assets/loading.svg')" alt="loading">
  </div>
</template>

<script>
import {checkCertbotExistence} from "@/utils/eventCenter";

export default {
  name: "CheckCertbot",
  mounted() {

    checkCertbotExistence()
        .then(() => this.$router.push({name: 'FeaturesMenu'}))
        .catch(() => this.$router.push({name: 'PleaseInstallCertbot'}))
  },
}
</script>

<style scoped>

</style>