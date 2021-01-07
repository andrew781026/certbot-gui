<template>
    <!-- v-bind="$attrs" 將 parent 參數繼承 v-on="$listeners" 將 parent 動作繼承 -->
    <el-input
        :value="value"
        @input="$emit('input', $event)"
        clearable
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <img style="width: 26px; margin: 7px 0 0 4px" slot="prefix" :src="imgSrc" alt="domain-reg" />
    </el-input>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        imgSrc: String,
        value: String,
        placeholder: String,
    },
}
</script>

<style scoped>
/* override the el-input padding-left */
.el-input--prefix /deep/ .el-input__inner {
    padding-left: 40px;
}
</style>
