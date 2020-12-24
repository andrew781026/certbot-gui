<template>
  <div>
    <h1 class="text-4xl mb-3">您目前的 SSL 憑證有：</h1>
    <div v-for="domain in domains" :key="domain">
      <div class="py-2">
      <span class="text-2xl text-blue-500">Domain : </span>
      <span class="text-2xl text-green-500 underline">{{domain}}</span>
      </div>
      <ul class="ml-5">
        <li>C:\Certbot\live\{{domain}}\fullchain.pem</li>
        <li>C:\Certbot\live\{{domain}}\privkey.pem</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "ViewSSL",
  data() {

    return {
      domains: [
        'azure.test.andrewdeveloper.com',
        'azure2.test.andrewdeveloper.com',
      ]
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: disc;
}
</style>