<template>
  <div>
    <h1 class="text-4xl mb-3">請輸入要通知的 EMail</h1>
    <el-form :model="formData" ref="emailForm">
      <el-form-item prop="email" :rules="rules">
        <CustomInput v-model="formData.email"
                     type="email"
                     placeholder="請輸入要通知的 EMail"
                     :img-src="require('@/assets/gmail.svg')"/>
      </el-form-item>
    </el-form>
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
      formData: {
        email: ''
      },
    }
  },
  computed: {
    rules() {

      return [
        {required: true, message: '請輸入信箱地址', trigger: 'blur'},
        {type: 'email', message: '請輸入正確的信箱地址', trigger: ['blur', 'change']}
      ]
    }
  },
  methods: {

    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    notifyEmail() {

      settingEmail(this.email)
          .then(() => this.$router.push({name: 'FeaturesMenu'}))
          .catch(err => {

            console.error(err);
            this.$notify.error({
              title: '設定錯誤',
              message: err.message
            });
          })
    }
  }
}
</script>

<style scoped>

</style>