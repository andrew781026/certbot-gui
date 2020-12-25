<template>
  <div>
    <h1 class="text-4xl mb-3">功能列表</h1>
    <div class="btn-wrap">
      <div class="box" @click="add">新增</div>
      <div class="box" @click="deleteSSL">刪除</div>
      <div class="box" @click="view">查看</div>
      <div class="box" @click="setting">設定</div>
    </div>
  </div>
</template>

<script>
import {showBackArrow,hideBackArrow} from "@/compositions/useBackArrow";

export default {
  name: "FeaturesMenu",
  mounted() {

    hideBackArrow();
  },
  methods: {
    add() {

      showBackArrow();
      this.$router.push({name: 'AddSSL'})
    },
    deleteSSL() {

      showBackArrow();
      this.$router.push({name: 'DeleteSSL'})
    },
    view() {

      showBackArrow();
      this.$router.push({name: 'ViewSSL'})
    },
    setting() {

      showBackArrow();
      this.$router.push({name: 'NotifyEmail'})
    },
  }
}
</script>

<style scoped lang="scss">

.btn-wrap {
  gap: 10px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
}

.btn-wrap .box {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-size: 40px;
  color: #ffffff;
  font-weight: 700;
  background-color: #409eff;
  height: 150px;
  width: 150px;
  border-radius: 10px;
  border: 2px solid #254053;

  &:hover {

    background-color: #1d63ef;
  }

  &:active {

    background-color: #2d0ae8;
  }
}
</style>