<template>
  <div>
    <h1 class="text-4xl mb-3">請輸入要刪除的域名</h1>
    <CustomInput v-model="domain"
                 placeholder="請輸入要刪除的域名 ( domain name )"
                 :img-src="require('@/assets/domain-registration-color.svg')"/>
    <el-button-group class="w-full" style="margin-top: 20px;">
      <el-button type="info" class="w-1/2" @click="$router.back()">取消</el-button>
      <el-button type="danger" class="w-1/2" @click="delSSL">刪除</el-button>
    </el-button-group>
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput";
import {deleteSSL} from "@/utils/eventCenter";

export default {
  name: "DeleteSSL",
  components: {CustomInput},
  data() {

    return {
      domain: ''
    }
  },
  methods: {

    delSSL() {

      deleteSSL(this.domain)
          .then(() => {

            this.$router.push({name: 'ViewSSL'})
          })
          .catch(console.error)
    }
  }
}
</script>

<style scoped>

</style>