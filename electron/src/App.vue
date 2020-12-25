<template>
  <div id="app">
    <TitleBar/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";

export default {
  name: 'App',
  components: {TitleBar},
}
</script>

<style>

* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
}

main {
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
