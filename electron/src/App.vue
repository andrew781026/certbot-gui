<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <MyFormWizard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MyFormWizard from './components/MyFormWizard.vue'

export default {
  name: 'App',
  components: {
    MyFormWizard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
