<template>
  <div>
    <h1 class="text-4xl mb-3">請輸入要通知的 EMail</h1>
    <el-input v-model="email"
              clearable
              placeholder="請輸入要通知的 EMail">
      <img class="w-5" style="margin: 10px 0 10px 5px"
           slot="prefix" :src="require('@/assets/gmail.svg')"
           alt="gmail">
    </el-input>
    <el-button-group class="w-full mt-8">
      <el-button type="info" class="w-1/2">取消</el-button>
      <el-button type="success" class="w-1/2">設定</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: "NotifyEmail",
  data() {

    return {
      email: ''
    }
  },
  methods: {

    addNotifyEmail() {

      // 開啟連結 , 下載 certbot 安裝檔

    }
  }
}
</script>

<style scoped>

/* override el-input padding-left */
.el-input--prefix /deep/ .el-input__inner {

  padding-left: 35px;
}
</style>