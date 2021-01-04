<template>
  <el-popover
      :visible-arrow="false"
      class="float-icon"
      placement="top-start"
      width="200"
      trigger="click">
    <el-button slot="reference" type="info" class="set-btn" icon="el-icon-s-tools" circle></el-button>
    <template>
      <img :src="require('@/assets/logos/ngrok-logo.png')"
           alt="ngrok-logo"
           @click="routing('CheckNgrok')">
      <img :src="require('@/assets/logos/certbot-logo.png')"
           alt="certbot-logo"
           @click="routing('CheckCertbot')">
    </template>
  </el-popover>
</template>

<script>
export default {
  name: "FloatSwitch",
  methods: {

    routing(name) {

      this.$router.push({name})
    }
  },
  data() {

    return {
      menus: [
        {
          name: 'PleaseInstallCertbot',
          label: '請安裝 Certbot',
        },
        {
          name: 'CheckCertbot',
          label: '確認 Certbot 安裝',
        },
        {
          name: 'FeaturesMenu',
          label: '功能選擇頁',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.float-icon {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 20px;
  bottom: 20px;
  border-radius: 50%;
}

.set-btn {
  padding: 7px;
  font-size: 30px;
}
</style>
