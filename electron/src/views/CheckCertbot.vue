<template>
  <div class="flex-center flex-col">
    <h1 class="text-4xl">確認 Certbot 是否已安裝</h1>
    <img :src="require('@/assets/loading.svg')" alt="loading">
  </div>
</template>

<script>
import {checkCertbotExistence, checkCertbotPermit} from "@/utils/eventCenter";

export default {
  name: "CheckCertbot",
  mounted() {

    checkCertbotExistence()
        .then(
            checkCertbotPermit,
            () => this.$router.push({name: 'PleaseInstallCertbot'})
        )
        .then(
            () => this.$router.push({name: 'FeaturesMenu'}),
            () => this.$router.push({name: 'PermitDeny'})
        )
  },
}
</script>

<style scoped>
</style>