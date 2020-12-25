<template>
  <div class="flex flex-col items-center">
    <h1 class="text-6xl mb-14">歡迎使用 Certbot 管理器</h1>
    <div>
      <el-button type="success" @click="$router.push({name: 'CheckCertbot'})">
        <span class="text-3xl">開始使用</span>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>

</style>