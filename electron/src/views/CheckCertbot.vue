<template>
  <div>
    <h1>確認 Certbot 是否已安裝</h1>
    <img :src="require('@/assets/loading.svg')" alt="loading">
  </div>
</template>

<script>
import {checkCertbotExistence, checkCertbotPermit} from "@/utils/eventCenter";

export default {
  name: "CheckCertbot",
  mounted() {

    const checkFn = async () => {

      try {

        await checkCertbotExistence();
        await checkCertbotPermit();
        this.$router.push({name: 'FeaturesMenu'});

      } catch (err) {

        if (err.message.indexOf('administrative rights') > -1) this.$router.push({name: 'PermitDeny'})
        else this.$router.push({name: 'PleaseInstallCertbot'})
      }
    }

    checkFn()
  },
}
</script>

<style scoped>

</style>