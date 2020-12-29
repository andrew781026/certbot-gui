<template>
  <div class="server-root flex flex-col">
    <div class="text-xl mb-2" :class="[running ?  'bg-green-400' : 'bg-red-400']">
      測試用伺服器 - {{ running ? '執行中' : '停止' }}
    </div>
    <span class="mb-2">內部：{{ inner_host }}</span>
    <span class="mb-2">外部：{{ outer_host }}</span>
    <el-button type="danger" @click="stop()" v-if="running">停止</el-button>
    <el-button type="success" @click="start()" v-else>啟用</el-button>
  </div>
</template>

<script>
import {ngrokDisconnect, ngrokConnect} from "@/compositions/useNgrok";

export default {
  name: "TestServer",
  methods: {

    start(port = 9090) {

      ngrokConnect(port)
          .then(outer_host => {
            this.outer_host = outer_host.replace('https://', '');
            this.inner_host = `localhost:${port}`;
            this.running = true;
          })
          .catch()
    },

    stop(url) {

      ngrokDisconnect(url)
          .then(() => {
            this.outer_host = '';
            this.inner_host = '';
            this.running = false;
          })
          .catch()
    },
  },
  data() {

    return {
      inner_host: '',
      outer_host: '',
      running: false,
    }
  }
}
</script>

<style scoped lang="scss">
.server-root {
  border: 1px solid #254053;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 10px;
  bottom: 10px;
  border-radius: 10px;
  padding: 14px;
}
</style>
