<template>
  <el-input :value="value"
            @input="$emit('input',$event)"
            clearable
            :placeholder="placeholder">
    <img style="width: 26px;margin: 7px 0 0 4px" slot="prefix"
         :src="imgSrc"
         alt="domain-reg">
  </el-input>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    imgSrc: String,
    value: String,
    placeholder:String,
  }
}
</script>

<style scoped>
/* override el-input padding-left */
.el-input--prefix /deep/ .el-input__inner {

  padding-left: 40px;
}
</style>