<template>
  <div>
    <h1>功能列表</h1>
    <div class="btn-wrap">
      <div class="box">新增</div>
      <div class="box">刪除</div>
      <div class="box">查看</div>
      <div class="box">設定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesMenu"
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
  font-size: 40px;
  color: #f0f0f0;
  font-weight: 900;
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