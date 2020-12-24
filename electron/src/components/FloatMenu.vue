<template>
  <div class="float-icon">
    <div class="menu-item"
         v-for="(item,index) in menus"
         :key="`menu-${index}`"
         @click="routing(item.name)">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatMenu",
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
  border: 1px solid #254053;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 10px;
  padding: 6px 0 6px 0;
}

.menu-item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:hover{
    background-color:#DCDFE6 ;
  }

  &:active{
    background-color:#C0C4CC ;
  }
}
</style>
