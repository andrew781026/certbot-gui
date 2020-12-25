<template>
  <div>
    <h1 class="text-4xl mb-3">請輸入要通知的 EMail</h1>
    <CustomInput v-model="email"
                 placeholder="請輸入要通知的 EMail"
                 :img-src="require('@/assets/gmail.svg')"/>
    <el-button-group class="w-full mt-8">
      <el-button type="info" class="w-1/2" @click="$router.back()">取消</el-button>
      <el-button type="success" class="w-1/2" @click="notifyEmail">設定</el-button>
    </el-button-group>
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput";
import {settingEmail} from "@/utils/eventCenter";

export default {
  name: "NotifyEmail",
  components: {CustomInput},
  data() {

    return {
      email: ''
    }
  },
  methods: {

    notifyEmail() {

      settingEmail(this.email)
          .then(() => this.$router.push({name: 'FeaturesMenu'}))
          .catch(console.error)
    }
  }
}
</script>

<style scoped>

</style>