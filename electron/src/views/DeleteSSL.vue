<template>
  <div>
    <h1>請輸入要刪除的域名</h1>
    <el-input v-model="domain"

              clearable
              placeholder="請輸入要刪除的域名 ( domain name )">
      <img style="width: 20px;margin: 11px 0 11px 5px" slot="prefix" :src="require('@/assets/domain-registration.svg')"
           alt="domain-reg">
    </el-input>
    <el-button-group style="margin-top: 20px;width: 100%">
      <el-button type="info" style="width:50%">取消</el-button>
      <el-button type="danger" style="width:50%">刪除</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: "DeleteSSL",
  data() {

    return {
      domain: ''
    }
  },
  methods: {

    downloadCertbot() {

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