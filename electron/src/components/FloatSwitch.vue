<template>
  <el-popover
      :visible-arrow="false"
      :value="visible"
      class="float-icon"
      placement="top-start"
      width="200"
      trigger="manual">
    <el-button slot="reference" type="info"
               class="set-btn" icon="el-icon-s-tools"
               @click="openMenu" circle></el-button>
    <template>
      <img class="logo-img"
           :src="require('@/assets/logos/ngrok-logo.png')"
           alt="ngrok-logo"
           @click="routing('CheckNgrok')">
      <img class="logo-img"
           :src="require('@/assets/logos/certbot-logo.png')"
           alt="certbot-logo"
           @click="routing('CheckCertbot')">
    </template>
  </el-popover>
</template>

<script>
export default {
  name: "FloatSwitch",
  methods: {

    openMenu() {

      this.visible = true;
    },
    routing(name) {

      this.$router.push({name});
      this.visible = false;
    }
  },
  data() {

    return {
      visible: false,
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

.logo-img {
  cursor: pointer;

  &:hover {
    // 參考資料 : http://blog.shihshih.com/css-filter/
    filter: drop-shadow(3px 3px 3px #1374f1);
  }

  &:active {
    // 參考資料 : http://blog.shihshih.com/css-filter/
    filter: drop-shadow(5px 5px 5px #1465ce);
  }
}
</style>
