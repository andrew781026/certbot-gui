<template>
    <div>
        <h1 class="text-4xl mb-3">您目前的 SSL 憑證有：</h1>
        <div v-if="loading" class="flex justify-center pr-8">
            <img :src="require('@/assets/loading.svg')" alt="loading" />
        </div>
        <template v-else>
            <div v-for="domain in domains" :key="domain">
                <div class="py-2">
                    <span class="text-2xl text-blue-500">Domain : </span>
                    <span class="text-2xl text-green-500 underline">{{ domain }}</span>
                </div>
                <ul class="ml-5">
                    <li>C:\Certbot\live\{{ domain }}\fullchain.pem</li>
                    <li>C:\Certbot\live\{{ domain }}\privkey.pem</li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script>
import { viewSSLs } from '@/utils/eventCenter'

export default {
    name: 'ViewSSL',
    mounted() {
        viewSSLs()
            .then(certificates => {
                this.domains = certificates.map(item => item.Domains)
            })
            .catch(err => {
                console.error(err)
                this.$notify.error({
                    title: '權限錯誤',
                    message: err.message,
                    offset: 40,
                })
            })
            .finally(() => (this.loading = false))
    },
    data() {
        return {
            loading: true,
            domains: [],
        }
    },
}
</script>

<style scoped>
ul {
    list-style-type: disc;
}
</style>
