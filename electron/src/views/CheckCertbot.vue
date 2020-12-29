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

      } catch (err) {

        if (err.message.indexOf('administrative rights') > -1) {

          /*
          this.$notify.error({
            title: '權限不足',
            message: err.message,
            offset: 40
          });
           */

          this.$router.push({name: 'PermitDeny'})

        } else this.$router.push({name: 'PleaseInstallCertbot'})

      }
    }

    checkFn()
  },
}
</script>

<style scoped>

</style>