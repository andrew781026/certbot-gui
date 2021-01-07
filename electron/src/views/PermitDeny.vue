<template>
    <div class="flex flex-col items-center">
        <h1 class="text-5xl mb-6">Certbot 權限不足</h1>
        <span>您需要以本機管理者的身分執行此 "Certbot 管理器"，才能正常使用 Certbot 的功能</span>
        <br />
        <el-button type="danger" @click="closeApp">關閉管理器</el-button>
    </div>
</template>

<script>
import { exit } from '@/ipcRenderer/titlebar'

export default {
    name: 'PermitDeny',
    methods: {
        closeApp() {
            exit()
        },
    },
}
</script>

<style scoped></style>
