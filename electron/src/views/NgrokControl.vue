<template>
  <div class="flex-center flex-col">
    <FloatSwitch curr="ngrok"/>
    <div class="w-122">
      <div class="text-3xl mb-5 p-5" :class="[running ?  'bg-green-400' : 'bg-red-400']">
        測試用伺服器 - {{ running ? '執行中' : '停止' }}
      </div>
      <div class="ml-1 mb-5 text-2xl" :class="[running && 'link']" @click="open(inner_host)">
        內部：{{ inner_host }}
      </div>
      <div class="ml-1 mb-5 text-2xl" :class="[running && 'link']" @click="open(outer_host)">
        外部：{{ outer_host }}
      </div>
      <el-button class="w-full" type="danger" @click="stop()" v-if="running">停止</el-button>
      <el-button class="w-full" type="success" @click="start()" v-else>啟用</el-button>
    </div>
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
.link {

  cursor: pointer;

  &:hover {
    background-color: #409eff;
  }

  &:active {
    background-color: #0e57f1;
  }
}
</style>