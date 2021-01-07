<template>
    <div>
        <h1 class="text-4xl mb-3">請輸入要建立的域名</h1>
        <el-form :model="formData" ref="createForm" :rules="rules">
            <el-form-item prop="domain">
                <CustomInput
                    v-model="formData.domain"
                    placeholder="請輸入要建立的域名 ( domain name )"
                    :img-src="require('@/assets/domain-registration-color.svg')"
                />
            </el-form-item>
            <el-form-item prop="email">
                <CustomInput
                    v-model="formData.email"
                    type="email"
                    placeholder="請輸入要通知的 EMail"
                    :img-src="require('@/assets/gmail.svg')"
                />
            </el-form-item>
        </el-form>
        <el-button-group class="w-full" style="margin-top: 20px">
            <el-button type="info" class="w-1/2" @click="$router.back()">取消</el-button>
            <el-button type="success" class="w-1/2" @click="submitForm('createForm')">新建</el-button>
        </el-button-group>
    </div>
</template>

<script>
import CustomInput from '@/components/CustomInput'
import { addSSL } from '@/utils/eventCenter'

export default {
    name: 'AddSSL',
    components: { CustomInput },
    data() {
        return {
            formData: {
                domain: '',
                email: '',
            },
        }
    },
    methods: {
        createSSL() {
            addSSL(this.formData)
                .then(() => this.$router.push({ name: 'ViewSSL' }))
                .catch(console.error)
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.createSSL()
                } else {
                    console.error('error submit!!')
                    return false
                }
            })
        },
    },
    computed: {
        rules() {
            return {
                email: [
                    { required: true, message: '請輸入信箱地址', trigger: 'blur' },
                    { type: 'email', message: '請輸入正確的信箱地址', trigger: ['blur', 'change'] },
                ],
                domain: [
                    { required: true, message: '請輸入域名', trigger: 'blur' },
                    { min: 3, message: '域名至少 3 碼', trigger: ['blur', 'change'] },
                ],
            }
        },
    },
}
</script>

<style scoped></style>
