<template>
  <div>
    <h1>請輸入要建立的域名</h1>
    <CustomInput v-model="domain"
                 placeholder="請輸入要建立的域名 ( domain name )"
                 :img-src="require('@/assets/domain-registration-color.svg')"/>
    <el-button-group class="w-full" style="margin-top: 20px;">
      <el-button type="info" class="w-1/2">取消</el-button>
      <el-button type="success" class="w-1/2">新建</el-button>
    </el-button-group>
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput";

export default {
  name: "AddSSL",
  components: {CustomInput},
  data() {

    return {
      domain: ''
    }
  },
  methods: {

    nextStep() {

      // 開啟連結 , 下載 certbot 安裝檔

    }
  }
}
</script>

<style scoped>

</style>