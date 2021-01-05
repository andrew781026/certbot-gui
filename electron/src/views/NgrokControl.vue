<template>
  <div class="flex-center flex-col">
    <FloatSwitch curr="ngrok"/>
    <template>
      <div class="text-xl mb-2" :class="[running ?  'bg-green-400' : 'bg-red-400']">
        測試用伺服器 - {{ running ? '執行中' : '停止' }}
      </div>
      <span class="mb-2" @click="open(inner_host)">內部：{{ inner_host }}</span>
      <span class="mb-2" @click="open(outer_host)">外部：{{ outer_host }}</span>
      <el-button type="danger" @click="stop()" v-if="running">停止</el-button>
      <el-button type="success" @click="start()" v-else>啟用</el-button>
    </template>
  </div>
</template>

<script>
import {ngrokDisconnect, ngrokConnect} from "@/ipcRenderer/ngrok";
import {openUrl} from "@/ipcRenderer/common";
import FloatSwitch from "@/components/FloatSwitch";

export default {
  name: "NgrokControl",
  components: {FloatSwitch},
  methods: {

    open(url) {

      openUrl(`http://${url}`);
    },

    start(port = 9090) {

      console.log('exePath=', this.exePath)

      ngrokConnect({exePath: this.exePath, port})
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
      exePath: './bin/ngrok.exe',
    }
  }
}
</script>

<style scoped lang="scss">

</style>