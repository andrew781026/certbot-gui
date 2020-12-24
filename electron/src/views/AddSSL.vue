<template>
  <div>
    <h1 class="text-4xl mb-3">請輸入要建立的域名</h1>
    <CustomInput v-model="domain"
                 placeholder="請輸入要建立的域名 ( domain name )"
                 :img-src="require('@/assets/domain-registration-color.svg')"/>
    <el-button-group class="w-full" style="margin-top: 20px;">
      <el-button type="info" class="w-1/2" @click="$router.back()">取消</el-button>
      <el-button type="success" class="w-1/2" @click="addSSL">新建</el-button>
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

    addSSL() {


    }
  }
}
</script>

<style scoped>

</style>